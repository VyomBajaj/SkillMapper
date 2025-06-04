import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './utils/db.js'
import authRouter from './routes/auth.route.js'
import staticRoleRouter from './routes/staticRoles.route.js'

dotenv.config()
connectDB()

const app = express()
const PORT = 8000

app.use(express.json())
app.use(express.urlencoded({
    extended:true,
    parameterLimit:5000
}))

app.get('/',(req,res)=>{
    res.send("SkillMapper HomePage")
})

app.use('/api/auth',authRouter)
app.use('/api/staticRoles',staticRoleRouter);

app.listen(PORT,()=>{
    console.log("App running on PORT 8000")
})