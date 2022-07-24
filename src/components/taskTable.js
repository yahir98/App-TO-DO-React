import { TaskRow } from "./taskRow"

export const  TaskTable=({tasks,toogleTask,showCompleted=false,title})=>{



  const TaskTableRow=(doneValue)=>{

return(

  tasks.filter(task=>task.done===doneValue)
  .map(task => (


    <TaskRow task={task} key={task.name} toogleTask={toogleTask}/>
  
))
)
  }

return (
<table className="table table-dark table-striped table-bordered border-secondary">
    <thead>
      <tr className="table-primary">
        <th>
          
        {title}
       
        </th>
      </tr>
    </thead>
    <tbody>
        {
TaskTableRow(showCompleted)
        }

    </tbody>

  </table>)

}