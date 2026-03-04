//checklist
import React, { useState } from 'react';
import { MdCheck, MdDeleteForever } from 'react-icons/md';
import { preDefinedTasksTrain } from './Essentials';

export default function Checklist() {

  const [inputValue, setInputValue] = useState("");
  const [toggle, setToggle] = useState(false)
  
  const [task, setTask] = useState(preDefinedTasksTrain);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) {
      document.querySelector('#error').innerHTML="Please enter a value";
      return;
    }
    else if (task.some(t => t.text.toLowerCase() === inputValue.trim().toLowerCase())) {
      document.querySelector('#error')
      .innerHTML=`<strong class="text-red-500">'${inputValue}'</strong> already exists in the list`;
      setInputValue("");
      return;
    }
    else{document.querySelector('#error').innerHTML="";}

    setTask((prevTask) => [...prevTask, { text: inputValue, completed: false }]);
    setInputValue("");
  };

  
  const handleCompleted = (index) => {
    event.preventDefault();
  setTask((prevTask) =>
    prevTask.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    )
  );
};

  const handleDelete = (index) => {
     event.preventDefault();
    setTask((prevTask) => prevTask.filter((_, i) => i !== index));
  };

  const btnStyles = 'bg-white rounded px-5 px-2 hover:text-white border'

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className='flex justify-center flex-col'>
          <div >
            <input className='rounded-l border border-green-200 bg-white p-5 text-2xl'
              type="text"
              autoComplete="off"
              value={inputValue}
              placeholder='input the task'
              onChange={(event) => handleInputChange(event.target.value)}
            />
            <button className='bg-green-800 p-5 border border-green-200 rounded-r text-2xl text-white' type="submit">Add Task</button>
          </div>
          <div id="error"></div>
          <ul className='border-t border-gray-200 w-[640px] mx-auto'>
            {task.map((currTask, index) => (
              <li key={index} className='flex border-b border-gray-200 py-2 flex justify-center'>
                <p
                  className='w-lg text-left text-lg bg-gray-200 p-3 rounded'
                  style={{ 
                          textDecoration: currTask.completed ? 'line-through' : 'none', 
                          color: currTask.completed ? 'green' : 'black' }}
                  >{currTask.text}
                </p>

                <button 
                  className={`${btnStyles} hover:bg-green-500  border-green-500 text-green-500  mx-1 `  } 
                  onClick={() => handleCompleted(index)}>
                    <MdCheck className="text-2xl" />
                </button>

                <button 
                  className={`${btnStyles} hover:bg-red-500 hover:bg-red-600  border-red-500  text-red-500` }
                  onClick={() => handleDelete(index)}>
                    <MdDeleteForever className="text-2xl" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </form>
    </>
  );
}