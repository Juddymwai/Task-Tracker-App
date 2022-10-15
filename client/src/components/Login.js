import React, {useState} from "react";

function Login({setUser}){
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

            <form className="form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input className="input"
                    type="text"
                    value={username}
                    id= "username"
                    autoComplete="off"
                    onChange= {(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                <br/>
                <input className="input"
                    type="password"
                    value={password}
                    id= "password"
                    autoComplete="off"
                    onChange= {(e) => setPassword(e.target.value)}
                    placeholder="Password"

                />
                <br/>
                <button className="btn3">Login</button>
            </form>

        </div>
    )
}
export default Login;