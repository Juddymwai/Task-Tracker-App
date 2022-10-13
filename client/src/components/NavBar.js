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
        <div className="nav">
      
        <Link className="link" to="/">Home</Link>
    
        <div>
            {user ? (
                <button className="btn1" onClick={handleLogout}>Logout</button>
            ):(
                <>
            
                <Link className="link" to="/signup">SignUp</Link>
                <Link className="link" to='/login'>Login</Link>
                </>
                
            
            )}
            
        </div>
      

        </div>
    );
}


export default NavBar;