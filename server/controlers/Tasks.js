import { response } from "express";
import Task from "../models/Task.js";
import { set } from "mongoose";

const PostApiTask = async (req, res) => {
    const { title, description, priority } = req.body

    const tasks = new Task({
        title,
        description,
        priority
    })
    try {
        const saveTask = await tasks.save()

        res.json({
            success: true,
            data: saveTask,
            massege: "Task Added"
        })
    }
    catch (err) {
        res.json({
            success: false,
            massege: err.massege
        })
    }
}

const GetApiTasks = async (req, res) => {
    try {
        const Tasks = await Task.find()

        res.json({
            success: true,
            data: Tasks,
            massege: "Show all task"
        })
    } catch (err) {
        res.json({
            success: false,
            massege: err.massege
        })
    }

}

const PutApiTasks = async (req, res) => {
    const { id } = req.params;
    const { title, description, priority } = req.body

    await Task.updateOne({ _id: id },
        {
            $set: {
                title,
                description,
                priority
            },
        })

    const updateTask = await Task.findById(id);
    try{
        res.json({
            success: true,
            data: updateTask,
            massage: "Task Update successFully"
        });
    }
    catch(err){
        res.json({
            success: false,
            massage: err.massege
        }); 
    }
}


const DeleteApiTask = async (req, res) => {

    const { id } = req.params

    try {
        const deleteTask = await Task.deleteOne({ _id: id })

        res.json({
            success: true,
            massage: "Task Deleted"
        })
    } catch (err) {
        res.json({
            success: false,
            massage: err.massage
        })
    }




}

export { PostApiTask, GetApiTasks, PutApiTasks, DeleteApiTask }