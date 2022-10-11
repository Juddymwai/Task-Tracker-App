import React,{ useState,useEffect} from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import NavBar from "./NavBar";

function App(){

  const [user, setUser] = useState(null);

  useEffect(() =>{
    fetch('/me').then((resp) =>{
      if (resp.ok){
        resp.json().then ((user)=> setUser(user));
      }
    })
  }, []
  );

  return (
    <div>
     
      <main>

        {user ? (
          
          <Router>

              <NavBar user={user} setUser={setUser} />

          <Routes>
            <Route path="/" element={<Home user={user}/>}/>
          </Routes>
          </Router>
          
        ) : (
          
          <Router>
            <NavBar id={user} user={user} setUser={setUser} />

            <Routes>
              <Route path="/signup" element={<SignUp setUser={setUser} />}/>
              <Route path="/login" element={<Login setUser={setUser} />}/>
              <Route path="/" element={<Home/>}></Route>
            </Routes>

          </Router>
        )}
      </main>



     

    </div>
  )
}
export default App;

      
      