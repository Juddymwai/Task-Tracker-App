import React, {useState} from "react"

function EditTask(){

    const [taskBody, setTaskBody]= useState[""]

    return (
        <div>
            <form>
                <input
                type={text}
                name ={body}
                value ={taskBody}
                onChange ={(e) => setTaskBody(e.target.value)}
            
                />
            </form>


        </div>
    )
}

export default EditTask;