import express from 'express'
import fs from 'fs';

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
            return role.id == id
        })
        console.log(final)
        return res.status(200).json(final)
    }
    catch (error) {
        return res.status(500).json({ "message": error.message })
    }

})

export default router