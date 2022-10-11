import React, {useEffect, useState} from "react"
// import CreateTask from "./CreateTask";
import NewTask from "./NewTask";
import DeleteTask from "./DeleteTask";

function Home({user, id}){

    const [task, setTask]=useState([]);
    const [newTask1, setNewTask1]=useState([]);
    const [open, setOpen] = useState(false)

    useEffect(()=>{
        fetch(`/users/${id}`)
     
        .then((r)=> r.json())
        .then((data)=> setTask(data))
        }, [])
        console.log(task.tasks)

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
    

  

    if (user){
        return (
            <div>
                <h2> Welcome, {user.username}!</h2>
                <button onClick={handleOpen}>ADD TASK</button>

                {/* <NewTask onHandleAddPost={handleAddPost}/> */}
                <div open={open} onClose={handleClose}>
                    {/* <CreateTask handleClose={handleClose}/> */}
                </div>
                {open ? (<NewTask onHandleAddPost={handleAddPost}/>) : (null)}
                <h1>My Tasks</h1>
                {task.tasks.map((one) => {
                    return (
                        <div>
                            
                        <ul>
                            {/* <li>Username: {task.username}</li> */}
                            <li>Title: {one.title}</li>
                            <li>Duration: {one.duration}</li>
                            
                            
                        </ul>
                        <DeleteTask onDeletePost={handleDeletePost} id={task.id}/>
                        
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
        return <h2>Kindly Login or Sign Up</h2>
    }
} 
export default Home;