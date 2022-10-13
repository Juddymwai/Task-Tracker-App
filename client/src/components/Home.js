import React, {useEffect, useState} from "react"
import NewTask from "./NewTask";
import DeleteTask from "./DeleteTask";
import EditTask from "./EditTask";

function Home({user, id}){

    const [task, setTask]=useState([]);
    const [newTask1, setNewTask1]=useState([]);
    const [open, setOpen] = useState(false)
    const [on, setOn] = useState(false)


    useEffect(()=>{
        fetch(`/users/${id}`)
     
        .then((r)=> r.json())
        .then((data)=> setTask(data))
        }, [task])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleOn = () => {
        setOn(true)
    }

    const handleOff = () => {
        setOn(false)
    }

    // adding new post

    function handleAddPost(newData){

        setNewTask1([...newTask1, newData])
        
    }

    // Delete
    function handleDeletePost(id){
        const updatedTask = task.filter((p) => p.id !== id);
        setTask(updatedTask)
    
      }
// update
  function handleUpdate (updatedTaskObj){
    const updatedTask = task.map((item) => {
        if (item.id === updatedTaskObj.id){
            return updatedTaskObj
        } else {
            return item
        }
    })
    setTask(updatedTask)
  }
  
    if (user){
        return (

            <div>

                <h2 className="wel"> Welcome, {user.username}!</h2>
                <button className="btn2" onClick={handleOpen}>ADD TASK</button>

             
                {open ? (<NewTask onHandleAddPost={handleAddPost} handleClose={handleClose}/>) : (null)}
                <h1>My Tasks</h1>
                {task.tasks.map((one) => {
                    return (
                        <div className="card" style={{width: 18+"rem"}}>
                            <div className="card-body">
                                <li className="card-title">Title: {one.title}</li>
                                <p className="card-text">Duration: {one.duration}</p>
                                <DeleteTask onDeletePost={handleDeletePost} id={one.id}/>
                                <button onClick={handleOn}>Edit Task</button>
                                {on ? (<EditTask onUpdatedTask={handleUpdate} id={one.id} handleOff={handleOff}/>):(null)}
                           </div>
                        </div>
                    )
                })}
               
            </div>
        )

    } else {
        return (

            <div>
                <h3 className="title">TASK TRACKER</h3>
                <div className="home">

                
                <button className="btn4"><h3>TO GET STARTED</h3>
                
                </button>
                <button className="btn5">
                    <h3>Kindly SignUP or Login</h3>
                </button>
                </div>
            </div>
        )
    }
} 
export default Home;