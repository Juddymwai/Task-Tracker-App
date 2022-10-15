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
  const user1 = true;

  return (
    <div>
     
      <main>
        {/* <Router>
          <Routes>
            <Route path="/" >
            <Route path="/login" element={ user1? <Home user={user}/> :<Login setUser={setUser} />}/>
            <Route path="/signup" element={user1? <Home user={user}/> : <SignUp setUser={setUser} />}/>
            </Route>
          </Routes>
        </Router> */}

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

      
      