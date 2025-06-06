import express from 'express'
import fs from 'fs';
import { StaticRoadmap } from '../models/staticRoadmap.model.js';

const router = express.Router()

router.get('/get-trending-roles', (req, res) => {
    const data = fs.readFileSync('./data/trendingRoles.json');
    const roles = JSON.parse(data)
    return res.status(200).json(roles)
})

router.get('/other-roles', (req, res) => {
    const data = fs.readFileSync('./data/otherRoles.json');
    const roles = JSON.parse(data)
    return res.status(200).json(roles)
})

router.get('/details/:roadmapId', (req, res) => {
    try {
        const roadmapId = req.params
        const id = roadmapId.roadmapId
        const fetch = fs.readFileSync('./data/roleDetails.json')
        const data = JSON.parse(fetch)
        const final = data.filter((role) => {
            return role.roadmapId == id
        })
        console.log(final)
        return res.status(200).json(final)
    }
    catch (error) {
        return res.status(500).json({ "message": error.message })
    }

})

router.post('/seed-roadmap',async(req,res)=>{
    try {
        const {roadmapId} = req.body;
        if(!roadmapId){
            return res.status(400).json({message:"roadMapId is necessary"})
        }
        const fetch = fs.readFileSync('./data/roleDetails.json')
        const data = JSON.parse(fetch)
        const final = data.find((role)=>{
            return role.roadmapId === roadmapId
        })

        if(!final){
            return res.status(404).json({ error: "Roadmap not found in JSON" });
        }

        const existing = await StaticRoadmap.findOne({roadmapId:roadmapId});
        if(existing){
            return res.status(409).json({ message: "Roadmap already seeded" });
        }

        const newRoadmap = new StaticRoadmap(final);
        await newRoadmap.save();

        return res.status(201).json({ message: "Roadmap seeded successfully", roadmap: newRoadmap });

    } 
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
})

export default router