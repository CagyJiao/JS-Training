import './App.css';
import {useState} from 'react'
import Form from './components/Form'
import Title from './components/Title'
import TaskList from './components/TaskList'

const App = () => {
  const title = "ToDo List App"
  const [titleInput, setTitleInput] = useState('')
  const [descInput, setDescInput] = useState('')
  const [toDoList, setToDoList] = useState([])

  return (
    <div className="App">
      <Title 
        content={title}
      />
      <Form 
        titleInput={titleInput}
        onTitleInputChange={setTitleInput}
        descInput={descInput}
        onDescInputChange={setDescInput}
        toDoList={toDoList}
        onToDoListChange={setToDoList}
      />
      <TaskList
        toDoList={toDoList}
        onToDoListChange={setToDoList}
      />
    </div>
  );
}

export default App;
