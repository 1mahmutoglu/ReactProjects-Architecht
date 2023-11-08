import React, {useState} from 'react';

function Todo() {

  const [todolist, setTodolist] = useState([]);
  const [task, setTask] = useState('');

    const addTodo = () => {

        if(task) {
        setTodolist ([...todolist, task]);
        setTask('');
    }
    };

    const removeTodo = (index) => {
    const newTodolist = [...todolist];
          newTodolist.splice(index, 1);
          setTodolist(newTodolist);
    };


  return (
    <div>

      <h1> ToDo List </h1>
        <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)}/>

        <button 
        onClick={addTodo}
        class="btn btn-primary">Ekle</button>

    <ul>
        {todolist.map((todo,index) => (
            <li key={index}> 
            {todo}
            <button onClick={() =>removeTodo(index)} type="button" class="btn btn-danger m-1">Sil</button>
             </li>
        ))}
    </ul>

    </div>
  )
}


export default Todo
