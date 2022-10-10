import React from "react"
import { Link } from "react-router-dom";

function NavBar({user, setUser}){
    function handleLogout(){
        fetch('/logout',{method: "DELETE"})
        .then((resp)=> {
            if (resp.ok){
                setUser(null);
            }
        })
    }


    return(
        <div>
       <Link to="/">Home</Link>
        <div>
            {user ? (
                <button onClick={handleLogout}>Logout</button>
            ):(
                <>
            
                <Link to="/signup">SignUp</Link>
                <Link to='/login'>Login</Link>
                </>
            
            )}
        </div>
        </div>
    );
}


export default NavBar;