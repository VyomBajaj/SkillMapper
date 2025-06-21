import express from 'express';
import { fetchUser } from '../middlewares/fetchUser.middleware.js';
import { User } from '../models/user.model.js';
import { PersonalizedRoadmap } from '../models/personalizedRoadmap.model.js';
import { UserRoadmapSchema } from '../utils/zodSchema.js';
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const router = express.Router();

router.get('/get-roadmap', fetchUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);
    const userRoadmap = await PersonalizedRoadmap.findById(userId).lean();

    if (userRoadmap) {
      const { userId: _uid, _id, __v, ...clientData } = userRoadmap;
      console.log("Already exists")
      return res.status(200).json(clientData);
    }

    const model = new ChatGoogleGenerativeAI({
      model: "gemini-2.0-flash",
      temperature: 0.5,
      apiKey: process.env.GEMINI_API_KEY,
    });

    const structuredModel = model.withStructuredOutput(UserRoadmapSchema);

    const prompt = ChatPromptTemplate.fromMessages([
      ["system", "You are an expert career coach who creates roadmaps based on the user's skills and target role."],
      ["user", "Create a learning roadmap for someone with skills: {skills} targeting the role: {role}"],
    ]);

    const chain = prompt.pipe(structuredModel);

    const rawResult = await chain.invoke({
      skills: user.skills,
      role: user.goal,
    });

    const transformedSteps = rawResult.personalisedSteps.map((step) => ({
      ...step,
      topicNames: step.topicNames.map((name, index) => ({
        id: index + 1,
        name,
      })),
    }));

    const transformedCapstone = {
      ...rawResult.capstoneProject,
      topicNames: rawResult.capstoneProject.topicNames.map((name, i) => ({
        id: i + 1,
        name,
      })),
      resources: rawResult.capstoneProject.resources.map((res) => ({
        type: res.type || "documentation",
        ...res,
      })),
    };

    const finalResult = {
      ...rawResult,
      personalisedSteps: transformedSteps,
      capstoneProject: transformedCapstone,
    };

    // Optional: save in DB
    await PersonalizedRoadmap.findByIdAndUpdate(
      userId,
      { ...finalResult, userId: userId },
      { upsert: true }
    );

    const { userId: _, ...safeClientData } = finalResult;
    return res.status(200).json(safeClientData);


  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: error.message || "Something went wrong" });
  }
});

export default router;
