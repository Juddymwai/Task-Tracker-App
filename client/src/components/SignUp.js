

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

        </div>
    )
}