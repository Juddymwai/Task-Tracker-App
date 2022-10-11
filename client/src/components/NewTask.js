import React, {useState} from "react";
// import {useHistory} from "react-router-dom"


function NewTask({onHandleAddPost}){
 
   

    const [user_id, setUser_id] = useState("");
    const [title, setTitle] = useState("");
    const [duration, setDuration] = useState("");


    function handleSubmit(e){
         e.preventDefault()
       
        e.target.reset();

    
        const newObj = {
            "user_id":user_id,
            "title":title,
            "duration": duration
        }
        fetch("/tasks", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newObj)

        })
        .then((resp) => resp.json())
        .then((newBlog) => onHandleAddPost(newBlog) )

       
        

    }
    

    return (
        
            <div>

            <form onSubmit={handleSubmit}>                <h1>For Admin only</h1>
               <input
                    type="text"
                    value={title}
                    // id= "username"
                    autoComplete="off"
                    onChange= {(e) => setTitle(e.target.value)}
                    placeholder="Project's Name"
                />
                <br/>
                <input
                    type="text"
                    value={duration}
                    // id= "password"
                    autoComplete="off"
                    onChange= {(e) => setDuration(e.target.value)}
                    placeholder="Duration"

                />
                <br/>
                <input
                    type="text"
                    value={user_id}
                    // id= "password"
                    autoComplete="off"
                    onChange= {(e) => setUser_id(e.target.value)}
                    placeholder="Assigned To:"

                />
                <br/>
                <button>Add</button>
            </form>
        </div>
       
    )
}
export default NewTask;