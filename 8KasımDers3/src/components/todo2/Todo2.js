import React, {useState} from 'react';

function Todo2(){

  const [task, setTask] = useState([]);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

    const addTask = () => {

        if(name && surname) {
        setTask ([...task, {name, surname}]);
        setName('');
        setSurname('');
    }
    };

    const removeTask = (index) => {
    const newtask = [...task];
          newtask.splice(index, 1);
          setTask(newtask);
    };


  return (
    <div>


      <h1> ToDo List 2 </h1>

        <input 
        type="text" 
        value={name} 
        placeholder='İsim Giriniz'
        onChange={(e) => setName(e.target.value)}/>

<input 
        type="text" s
        value={surname} 
        placeholder='Soyisim Giriniz'
        onChange={(e) => setSurname(e.target.value)}/>

        <button 
        onClick={addTask}
        class="btn btn-primary">Ekle</button>

    <ul>
        {task.map((task2,index) => (
            <li key={index}> 
            <p>
                {task2.name} {task2.surname}
            </p>
          
            <button onClick={() =>removeTask(index)} type="button" class="btn btn-danger m-1">Sil</button>
             </li>
        ))}
    </ul>
    </div>
  )
}


export default Todo2
