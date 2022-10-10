import React from "react"

function Home({user}){
    if (user){
        return (
            <div>
                <h2> Welcome, {user.username}!</h2>;
            </div>
        )

    } else {
        return <h2>Kindly Login or Sign Up</h2>
    }
} 
export default Home;