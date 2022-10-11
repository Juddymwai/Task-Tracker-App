import React, {useState} from "react";

function Login({setUser}){
    const [username, setUsername] = useState("");
    const [title, setTitle] = useState("");
    const [duration, setDuration] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        fetch('/tasks',{
        method: "POST", 
        headers: {"Content-Type":"application/json"

        }, 

        body: JSON.stringify({title, duration, user_id: username}),

        }).then((r)=>{
            if (r.ok){ 

                r.json().then((user) => setUser(user));

            }
        });
    }


    return (
        <div>

            <form onSubmit={handleSubmit}>
                <h1>For Admin only</h1>
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
                    value={username}
                    // id= "password"
                    autoComplete="off"
                    onChange= {(e) => setUsername(e.target.value)}
                    placeholder="Assigned To:"

                />
                <br/>
                <button>Add</button>
            </form>

        </div>
    )
}
export default Login;