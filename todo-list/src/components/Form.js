import ToDoRaw from '../model/ToDoRaw'
import '../css/form.css'

const Form = ({
    titleInput, 
    onTitleInputChange, 
    descInput, 
    onDescInputChange, 
    toDoList, 
    onToDoListChange
}) => {
    const titleChange = (e) => {
        onTitleInputChange(e.target.value)
    }
    const descChange = (e) => {
        onDescInputChange(e.target.value)
    }
    const addToDo = (e) => {
        e.preventDefault();
        onToDoListChange([...toDoList, new ToDoRaw(titleInput, descInput, false)])
        console.log(toDoList)
        onTitleInputChange("")
        onDescInputChange("")
    }
    
    return (
        <form onSubmit={addToDo}>
            <input 
                type="text" 
                placeholder="Task Title" 
                className="title-input"
                value={titleInput}
                required
                onChange={titleChange}
            />
            <input 
                type="text" 
                placeholder="Task Description" 
                className="description-input"
                value={descInput}
                required
                onChange={descChange}
            />
            <button className="add-button" type="submit">Add</button>
        </form>
    )
}

export default Form;