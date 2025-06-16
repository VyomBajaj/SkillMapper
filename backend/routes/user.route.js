import express from 'express';
import { fetchUser } from '../middlewares/fetchUser.middleware.js';
import { User } from '../models/user.model.js';
import { upload } from '../middlewares/multer.middleware.js';
import cloudinary from '../config/cloudinary.js';
import fs from 'fs';



const router = express.Router();

router.post('/complete-profile', fetchUser, upload.single('avatar'), async (req, res) => {
  const userId = req.user.id;
  const { targetRole, skillSet, timeCanGive, designation, bio } = req.body;

  if (!targetRole || !skillSet || !timeCanGive || !designation) {
    return res.status(400).send("Incomplete data");
  }

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(401).send("User should login first");

    const update = {
      goal:targetRole,
      time:timeCanGive,
      designation,
      bio,
    };
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        public_id: userId,
        folder: 'avatars',
        overwrite: true,
      });

      update.avatar = result.secure_url;

      fs.unlink(req.file.path, (err) => {
        if (err) console.error("Failed to delete temp file:", err);
      });
    }
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: update,
        $addToSet: {
          skills: { $each: JSON.parse(skillSet) },
        },
      },
      { new: true }
    );

    if (!updatedUser) return res.status(404).send("User not found");

    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

export default router
