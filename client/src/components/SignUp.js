import React, {useState} from "react";

function SignUp({setUser}){
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const [confirmPassword, setConfirmPassword]= useState('');


    function handleSubmit(e){
        e.preventDefault();
        fetch('/signup',{
        method: "POST", 
        headers: {"Content-Type":"application/json"

        }, 

        body: JSON.stringify({username, password, password_confirmation: confirmPassword}),

        }).then((r)=>{
            if (r.ok){ 

                r.json().then((user) => setUser(user));

            }
        });

    }
    return (
        <div>
              <form className="form" onSubmit={handleSubmit}>

            <h1>SignUp</h1>


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
                autoComplete="current-password"
                onChange= {(e) => setPassword(e.target.value)}
                placeholder="Password"

            />
            <br/>
            <input className="input"
                type="password"
                value={confirmPassword}
                id= "confirmPassword"
                onChange= {(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                autoComplete="current-password"
                
            />
            <br/>
            <button className="btn3" >Sign Up</button>
            </form>

        </div>
    )
}

export default SignUp;