import React, {useState} from "react"

function EditTask({body, title, id, onUpdatedTask}){

    const [taskBody, setTaskBody]= useState(title);

    function handleSubmitForm(e){
        e.preventDefault()
     

       fetch(`/tasks/${id}`, {
           method: "PATCH",
           headers: {"Content-Type":"application/json"},
           body: JSON.stringify({
            title: taskBody
           })

       })
       .then((resp) => resp.json())
       .then((updatedTask) => onUpdatedTask(updatedTask) )

   }
   console.log(taskBody)
    return (
        <div>
        
            <form onSubmit={handleSubmitForm}>
                <input
                type="text"
                name = "body"
                value ={taskBody}
                onChange ={(e) => setTaskBody(e.target.value)}
                />
                <input type="submit" value ="save"/>
            </form>


        </div>
    )
}

export default EditTask;