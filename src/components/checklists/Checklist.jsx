// Checklist.jsx
import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { FaCheck } from "react-icons/fa";

import {
  inputStyle, addTaskBtn, btnStyles, ulStyle,
  liStyle, pStyle, chkBtnStyle, delBtnStyle
} from '../styles';



export default function Checklist({ initialTasks }) {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState(initialTasks);

  const handleInputChange = (value) => setInputValue(value);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;

    if (task.some(t => t.text === inputValue)) {
      alert(`'${inputValue}' already exists in the list`);
      setInputValue("");
      return;
    }

    setTask(prev => [...prev, { text: inputValue, completed: false }]);
    setInputValue("");
  };

  const handleCompleted = (index) => {
    setTask(prev =>
      prev.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleDelete = (index) => {
    setTask(prev => prev.filter((_, i) => i !== index));
  };

  return (
    
    <form onSubmit={handleFormSubmit}>
      <div>
        <div className='flex'>
          <input
            className={inputStyle}
            type="text"
            autoComplete="off"
            value={inputValue}
            placeholder='input the task'
            onChange={(e) => handleInputChange(e.target.value)}
          />
          <button className={addTaskBtn} type="submit">Add Task</button>
        </div>
        <ul className={ulStyle}>
          {task.map((currTask, index) => (
            <li key={index} className={liStyle}>
              <p className={pStyle}
                style={{
                  textDecoration: currTask.completed ? 'line-through' : 'none',
                  color: currTask.completed ? 'green' : 'black',
				  //backgroundColor:currTask.completed ? 'white' : 'inherit'
                }}>
                {currTask.text}
              </p>
              <button
                className={`${btnStyles} ${chkBtnStyle}`}
                onClick={() => handleCompleted(index)}>
                <FaCheck className="text-2xl" />
                
              </button>
              <button
                className={`${btnStyles} ${delBtnStyle}`}
                onClick={() => handleDelete(index)}>
                <MdDelete  className="text-2xl" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </form>
  
  );
}