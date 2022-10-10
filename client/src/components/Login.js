import React, {useState} from "react";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        fetch('/login',{
        method: "POST", 
        headers: {"Content-Type":"application/json"

        }, 

        body: JSON.stringify({username, password}),

        }).then((r)=>{
            if (r.ok){ 

                r.json().then((user) => setUser(user));

            }
        });
    }


    return (
        <div>

            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input
                    type="text"
                    value={username}
                    id= "username"
                    autoComplete="off"
                    onChange= {(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                <br/>
                <input
                    type="password"
                    value={password}
                    id= "password"
                    autoComplete="off"
                    onChange= {(e) => setPassword(e.target.value)}
                    placeholder="Password"

                />
                <br/>
                <button>Login</button>
            </form>

        </div>
    )
}
export default Login;