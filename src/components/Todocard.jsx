import React from 'react'

const Todocard = ({task,del,comp}) => {
    
  return (
    <div>
        <h2  id={task.isdone? "completed":""}>{task.action} </h2>
        <button onClick={()=>del(task.id)}>Delete</button>
        <button onClick={()=>comp(task.id)}>Complete</button>
    </div>
  )
}

export default Todocard