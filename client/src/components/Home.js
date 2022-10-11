import React, {useEffect, useState} from "react"

function Home({user}){

    const [task, setTask]=useState([]);



    useEffect(()=>{
        fetch('/tasks')
     
        .then((r)=> r.json())
        .then((data)=> setTask(data))
        }, [])

    if (user){
        return (
            <div>
                <h2> Welcome, {user.username}!</h2>;
                <button>ADD TASK</button>
                <h1>My Tasks</h1>
                {task.map((tasks) => {
                    return (
                        <div>
                            <ul>
                                <li>{tasks.title}</li>
                                <li>{tasks.duration}</li>
                                <li>{tasks.user_id}</li>
                            </ul>
                        </div>
                    )


                })}
                {/* <ul>
                    <li>{title} <span>{duration}</span></li>

                </ul> */}
            </div>
        )

    } else {
        return <h2>Kindly Login or Sign Up</h2>
    }
} 
export default Home;