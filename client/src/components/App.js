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
      <h1>hello</h1>
      {/* <main>
        {user ? (
          <Routes>
            <Route path="/" element={<Home user={user}/>}></Route>
          </Routes>
          
        ) : (
          
          <Router>
            <NavBar user={user} setUser={setUser} />
            <Routes>
            <Route path="/signup" element={<SignUp setUser={setUser} />}>
              
            </Route>
            <Route path="/login" element={<Login setUser={setUser} />}>
              
            </Route>
            <Route path="/" element={<Home />}>
              
            </Route>
            </Routes>
          </Router>
        )}
      </main> */}

       <NavBar setUser={setUser} user={user}/>
    
      <Home setUser={setUser}/>
      <SignUp setUser={setUser}/>
      <Login setUser={setUser}/>


     

    </div>
  )
}
export default App;

      
      