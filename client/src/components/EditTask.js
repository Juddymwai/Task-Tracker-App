import React, {useState} from "react"

function EditTask({ id, onUpdatedTask, handleOff}){

    const [title, setTitle]= useState();

    function handleSubmitForm(e){
        e.preventDefault()
     

       fetch(`/tasks/${id}`, {
           method: "PATCH",
           headers: {"Content-Type":"application/json"},
           body: JSON.stringify({
            title: title
           })

       })
       .then((resp) => resp.json())
       .then((updatedTask) => onUpdatedTask(updatedTask) )

       handleOff()
   }

  
    return (
        <div>
        
            <form onSubmit={handleSubmitForm} >
                <input
                    type="text"
                    name = "body"
                    value ={title}
                    onChange ={(e) => setTitle(e.target.value)}
                />
                <input type="submit" value ="save"/>
            </form>


        </div>
    )
}

export default EditTask;