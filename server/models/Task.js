import { Schema , model } from "mongoose";

const taskSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    priority : {
        type:String,
        enum : ["high" , "mideum" , "low"],
        required : true
    }
},{
    timestamps : true 
})

const Task = model("Task" , taskSchema)

export default Task