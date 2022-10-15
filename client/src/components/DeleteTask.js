import React, { useState } from "react";

function DeleteTask({onDeletePost, id, onUpdatedBody, currentUser}){
    const [open, setOpen] = useState(false)

    function handleDeleteClick(){
        fetch (`/tasks/${id}`, {
            method: "DELETE",
            headers:{"Content-Type": "application/json"}
        
        })
        onDeletePost(id)
    }
    
    

    return (
    
        <div>
           <p> <span  type = "button"  onClick={handleDeleteClick}role="img" aria-label="delete">
             🗑</span> </p>
            
    
    
        </div>
    )}
    


export default DeleteTask;