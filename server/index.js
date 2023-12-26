import experess from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { PostApiTask , GetApiTasks , PutApiTasks , DeleteApiTask } from "./controlers/Tasks.js"
dotenv.config()

const app = experess()
app.use(experess.json())
const PORT = process.env.PORT || 5000

const ConnectDB = async()=>{
    const conn = await mongoose.connect(process.env.MONGOOBD_URI)
    if (conn){
        console.log("MongooDB Connected SuccessFully ❤️")
    }
}

app.get("/helth" , (req , res)=>{
    res.json({
        success : true,
        message : "Hello Kashish"
    })
})

app.post("/api/tasks", PostApiTask)
app.get("/api/tasks" , GetApiTasks)
app.put("/api/tasks/:id" , PutApiTasks)
app.delete("/api/tasks/:id" , DeleteApiTask)


app.listen(PORT , ()=>{
    console.log(`Server Runing on Port ${PORT}`)
    ConnectDB()
})