
export const VisibilityControl=({isChecked,setShowCompleted,ClearTasks})=>{
    
    const DeleteTask=()=>{

        if(window.confirm('Are u sure you want to delete it?'))
        {
            ClearTasks()
            
        }
        
    }

    return(
       <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">

  <div className="form-check form-switch">
  <input
        className="form-check-input"
        type="checkbox"
        checked={isChecked}
        onChange={e=>setShowCompleted(e.target.checked)}/>{" "}
        <label>Show task done</label>

  </div>


        <button
        className="btn btn-danger btn-sm"
        onClick={DeleteTask}
        >Clear</button>
       </div>
    )
}