import express from 'express'
import fs from 'fs';

const router = express.Router()

router.get('/get-trending-roles',(req,res)=>{
    const data = fs.readFileSync('./data/trendingRoles.json');
    const roles = JSON.parse(data)
    return res.status(200).json(roles)
})

router.get('/other-roles',(req,res)=>{
    const data = fs.readFileSync('./data/otherRoles.json');
    const roles = JSON.parse(data)
    return res.status(200).json(roles)
})

export default router