import React, {useState} from "react"

function EditTask({body, id, onUpdatedTask}){

    const [taskBody, setTaskBody]= useState(body);

    function handleSubmit(e){
        e.preventDefault()
     

       fetch(`/users/${id}`, {
           method: "PATCH",
           headers: {"Content-Type":"application/json"},
           body: JSON.stringify({
            body: taskBody
           })

       })
       .then((resp) => resp.json())
       .then((updatedTask) => onUpdatedTask(updatedTask) )

   }
    return (
        <div>
            <form>
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