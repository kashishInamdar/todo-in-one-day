import { useState } from "react"
import "./AddTask.css"
import axios from "axios"


const AddTask = ()=>{
    const [title , setTitle] = useState('')
    const [description , setDescription] = useState('')
    const [priority , setPriority] = useState('')

    const addTask = async()=>{
        const respons = await axios.post("/api/tasks" , {
            title,
            description,
            priority
        })

        alert("Task Added")
        if(respons.data.success){
            window.location.href="/"
        }
        
    }   
    const cancle = ()=>{
        window.location.href="/"
    }



    return (
        <>
        <form>
            <div className="container">
        <h1 className="title">AddTask </h1>

                <input type="text" placeholder="Title"
                onChange={(e)=>{ setTitle(e.target.value)}}
                className="input-box" />

                <input type="text" placeholder="Description" value={description}
                onChange={(e)=>{ setDescription(e.target.value)}}
                className="input-box" />

                <select className="select-box" value={priority} 
                onChange={(e)=>{ setPriority(e.target.value)}}>
                    <option >priority</option>
                    <option value="high">High</option>
                    <option value="medium" >Medium</option>
                    <option value="low" >Low</option>
                </select>
                <button type="button" onClick={cancle}>Cancle</button>
                <button type="button" onClick={addTask}>Add Task</button>
                
            </div>
        </form>
        </>
    )
}

export default AddTask