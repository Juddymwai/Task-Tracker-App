

function SignUp(){
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const [confirmPassword, setConfirmPassword]= useState('');


    function handleSubmit(e){
        e.preventDefault();
        fetch('/signup',{
        method: "POST", 
        headers: {"Content-Type":"application/json"

        }, 

        body: JSON.stringify({username, password, confirmPassword}),

        }).then((r)=>{
            if (r.ok){ 

                r.json().then((user) => setUser(user));

            }
        });
    


    }


    return (
        <div>
              <form onSubmit={handleSubmit}>

            <h1>SignUp</h1>


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
                autoComplete="current-password"
                onChange= {(e) => setPassword(e.target.value)}
                placeholder="Password"

            />
            <br/>
            <input
                type="password"
                value={confirmPassword}
                id= "confirmPassword"
                onChange= {(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                autoComplete="current-password"
                
            />
            <br/>
            <button>Sign Up</button>
            </form>

        </div>
    )
}