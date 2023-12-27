import { useEffect, useState } from "react"
import "./Home.css"
import axios from "axios"
import {Link} from "react-router-dom"


const Home =()=>{
    const [tasks , setTasks] = useState([])
    const loadTask = async() =>{
        
        const respons = await axios.get("/api/tasks")
        setTasks(respons?.data?.data)

    }

    const deleteTask = async (_id)=>{
       const respons =  await axios.delete(`/api/tasks/${_id}`)
       if(respons.data.success){
        loadTask()
       }
    }

    const updateTask = (_id)=>{
        window.location.href = `/updateTask/${_id}`
    } 

    useEffect(()=>{
        loadTask()
    },[])

    return(
        <>
        <h1 className="title">TODO TASK</h1> 
        <div className="task-container">
        <Link to="/add-task"><span className="add-btn">+</span></Link>
            {
                tasks.map((task , index)=>{
                    const {title , description , priority , _id } = task

                    return(
                        <div key={index} className="task-card">
                            <h3>{title}</h3>
                            <hr />
                            <p>{description}</p>
                            <span className="priority">{priority}</span>
                            <span className="delete" onClick={()=>{
                                deleteTask(_id)
                            }}>🗑️</span>
                            <span className="edit" onClick={()=>{updateTask(_id)}}>🖊️</span>
                        </div>
                    )
                })
            }
        </div>
        </>
    )

}

export default Home 