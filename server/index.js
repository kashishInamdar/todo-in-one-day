import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { PostApiTask , GetApiTasks , GetApiTasksById , PutApiTasks , DeleteApiTask } from "./controlers/Tasks.js"
dotenv.config()
import path from "path"

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5000

const __dirname = path.resolve();

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
app.get("/api/v1/tsaks/:id" , GetApiTasksById)
app.put("/api/tasks/:id" , PutApiTasks)
app.delete("/api/tasks/:id" , DeleteApiTask)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
    });
  }

app.listen(PORT , ()=>{
    console.log(`Server Runing on Port ${PORT}`)
    ConnectDB()
})