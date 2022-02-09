import {useState} from 'react'
import ToDoRow from '../model/ToDoRow'
import ReactModal from 'react-modal'
import '../css/taskList.css'

const DeleteRow = ({row}) => {
    return (
        <>
        <del>
            <b>{row.title}</b>
        </del>
        {" "} 
        <del>
            {row.description}
        </del>
        </>
    )
}

const Row = ({index, row, toDoList, onToDoListChange}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [titleInput, setTitleInput] = useState(row.title)
    const [descInput, setDescInput] = useState(row.description)

    const toggleDone = () => {
        onToDoListChange(
            toDoList.map((r, idx) => 
                idx === index ? {...r, isDone: !r.isDone} : r
            )
        )
    }

    const deleteTask = () => {
        if(window.confirm("Sure to delete?")) {
            console.log(toDoList)
            console.log(row)
            onToDoListChange(toDoList.filter((t, idx) =>  idx !== index))
            console.log("delete")
        }
    }

    const editTask = () => {
        setIsOpen(true)
    }

    const updateRow = (e) => {
        e.preventDefault()
        onToDoListChange(
            toDoList.map((r, idx) =>
                idx === index ? new ToDoRow(titleInput, descInput, false) : r
            )
        )
        setIsOpen(false)
    }

    const cancelEdit = (e) => {
        e.preventDefault()
        setIsOpen(false)
    }

    const titleChange = (e) => {
        setTitleInput(e.target.value)
    }
    const descChange = (e) => {
        setDescInput(e.target.value)
    }

    return (
        <div className='task-row'>
            <input type="checkbox" checked={row.isDone} onChange={() => toggleDone()}/>
            {row.isDone ? 
                <DeleteRow row={row} />
                :
                <><b>{row.title}</b> {" "} {row.description}</>
            }
            <div>
                {!row.isDone &&
                    <button className="edit-button" onClick={() => editTask()}>
                        <img src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png" alt="edit"/>
                    </button>
                }
                <button className="delete-button" onClick={() => deleteTask()}>
                    <img src="https://img.icons8.com/material-outlined/24/000000/filled-trash.png" alt="delete"/>
                </button>
            </div>
            <ReactModal className="edit-modal" isOpen={!!isOpen} ariaHideApp={false}>
                <h2>Edit</h2>
                <form onSubmit={updateRow}>
                    <input type="text" placeholder='new title' value={titleInput} onChange={titleChange} required></input>
                    <input type="text" placeholder='new description' value={descInput} onChange={descChange} required></input>
                    <div className='edit-modal-btn'>
                        <button className="add-button" type="submit">Update</button>
                        <button className="add-button" type="button" onClick={cancelEdit}>Cancel</button>
                    </div>
                </form>
            </ReactModal>
        </div>
    )
}

const TaskList = ({toDoList, onToDoListChange}) => {

    return (
        <div className="task-list">
            <h2>List</h2>
            <ul>
                {toDoList.map((row, index) => 
                    <li key={index}>
                        <Row index={index} row={row} toDoList={toDoList} onToDoListChange={onToDoListChange}/>
                    </li>
                 )
                }
            </ul>
        </div>
    )
}

export default TaskList;