import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import "./../AddTask/AddTask.css"
import axios from "axios"

const UpdateTsak = ()=>{
    const [title , setTitle] = useState('')
    const [description , setDescription] = useState('')
    const [priority , setPriority] = useState('')

    const {_id} = useParams();

    const Task = async () =>{
        const respons = await axios.get(`/api/v1/tsaks/${_id}`)
        console.log(respons)
         const {title, description , priority} = respons?.data?.data;
        setTitle(title)
        setDescription(description)
        setPriority(priority)
    }
    const update = async (_id)=>{
        const respons = await axios.put(`/api/tasks/${_id}` , {
            title,
            description,
            priority
        })

        if(respons?.data?.data){
            alert("task Updated")
            window.location.href = "/"
        }

        setTitle("");
        setDescription("");
        setPriority("");
    } 

    const cancle = ()=>{
        window.location.href="/"
    }
    useEffect(()=>{
        Task()
    },[])


    return(
        <>
        <form>
            <div className="container">
        <h1 className="title">Update Task </h1>

                <input type="text" placeholder="Title"
                value={title}
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
                <button type="button" onClick={()=>{update(_id)}} >Update Task</button>
                
            </div>
        </form>
        </>
    )
}

export default UpdateTsak 