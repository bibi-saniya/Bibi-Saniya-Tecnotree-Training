import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      
      <img src={require("./busy-list.gif")}/>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </form>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
