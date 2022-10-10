import React,{ useState,useEffect} from "react";

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
          <Routes>
            <Route path="/">
              <Home user={user}/>
            </Route>
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
      </main>

    </div>
  )
}
export default App;

      
      