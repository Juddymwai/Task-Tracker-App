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

    </div>
  )
}
export default App;

      
      