import mongoose, { Schema } from "mongoose";

const progressSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    roadmapId: {
        type: Schema.Types.ObjectId,
        ref: 'StaticRoadmap',
        required: true
    },
    completedTopics: [{
        phaseId: Number,
        topicId: Number
    }],
    completedProjects: [{
        phaseId: Number,
        projectId: Number
    }],
    updatedAt: {
        type: Date,
        default: Date.now,
    }
})

const Progress = new mongoose.model('Progress',progressSchema)

