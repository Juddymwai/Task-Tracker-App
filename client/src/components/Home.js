import React, {useEffect, useState} from "react"
// import CreateTask from "./CreateTask";
import NewTask from "./NewTask";
import DeleteTask from "./DeleteTask";
import EditTask from "./EditTask";

function Home({user, id}){

    const [task, setTask]=useState([]);
    const [newTask1, setNewTask1]=useState([]);
    const [open, setOpen] = useState(false)

    useEffect(()=>{
        fetch(`/users/${id}`)
     
        .then((r)=> r.json())
        .then((data)=> setTask(data))
        }, [])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
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
    
      const handleDel = () => {
        console.log("test")
        setOpen(true)
    }
  function handleUpdate (updatedTaskObj){
    const updatedTask = task.map(()=>{
        if (task.id === updatedTaskObj.id){
            console.log(task.id)
            return updatedTaskObj ;

        } else {

            return task
        }
    })


    setTask(updatedTask);
    
  }
  console.log(task);


    if (user){
        return (

            <div>
                <h2 className="wel"> Welcome, {user.username}!</h2>
                <button className="btn2" onClick={handleOpen}>ADD TASK</button>

                {/* <NewTask onHandleAddPost={handleAddPost}/> */}
                <div open={open} onClose={handleClose}>
                    {/* <CreateTask handleClose={handleClose}/> */}
                </div>
                {open ? (<NewTask onHandleAddPost={handleAddPost}/>) : (null)}
                <h1>My Tasks</h1>
                {task.tasks.map((one) => {
                    return (
                        <div className="card" style={{width: 18+"rem"}}>

                        
                        <div className="card-body">
                            <li className="card-title">Title: {one.title}</li>
                            <p className="card-text">Duration: {one.duration}</p>
                            <DeleteTask  open={open} onDeletePost={handleDeletePost} id={one.id}/>
                            {/* <EditTask onUpdatedTask={handleUpdate} id={one.id} title={one.title}/> */}
                            {/* <button className="card-link">edit</button> */}
                        </div>
                       

                        {/* <ul onMouseOver={handleDel}>
                            {/* <li>Username: {task.username}</li> */}
                            
                            {/* <li>Title: {one.title}</li>
                            <p>Duration: {one.duration}</p>
                            
                            {open ? (<DeleteTask open={open} onDeletePost={handleDeletePost} id={one.id}/>):(null)} */}

                            {/* {isEditing ? (
                                <EditTask onUpdatedTask={handleUpdate} id={one.id} title={one.title}/>



                            ):(
                                <li>{title}</>
                            )


                            } */}
                        {/* </ul> */} 
                    
                

                        </div>
                    )

                })}
                {/* {task.map((tasks) => {
                    return (
                        <div key={tasks.id}>
                            <ul>
                                <li>{tasks.title}</li>
                                <li>{tasks.duration}</li>
                                {/* <li>{tasks.user}</li> */}

                                {/* <li>{tasks.user.map((users) => {
                                    <div>
                                        {console.log (users.username)}

                                    </div>

                                })}</li> */}
                            {/* </ul>
                        </div>
                    )


                })} */} 


               
            </div>
        )

    } else {
        return (

            <div className="home">
                <button className="btn4"><h3>TO GET STARTED</h3>
                
                </button>
                <button className="btn5">
                    <h3>Kindly SignUP or Login</h3>
                </button>
            </div>
        )
    }
} 
export default Home;