import { useState } from 'react';
import { MdCheck, MdDeleteForever } from 'react-icons/md';
import { preDefinedTasksTrain, 
  inputStyle, addTaskBtn, btnStyles, ulStyle, liStyle, pStyle, chkBtnStyle, delBtnStyle } from './Essentials';

export default function ChecklistTrain() {

  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState(preDefinedTasksTrain);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) {
      return;
    }

    if (task.includes(inputValue)) {
      alert(`'${inputValue}' already exists in the list`);
      setInputValue("");
      return;
    }

    setTask((prevTask) => [...prevTask, { text: inputValue, completed: false }]);

    setInputValue("");
  };

  
  const handleCompleted = (index) => {
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

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <div className='flex'>
            <input className={inputStyle}
              type="text"
              autoComplete="off"
              value={inputValue}
              placeholder='input the task'
              onChange={(event) => handleInputChange(event.target.value)}
            />
            <button className={addTaskBtn} type="submit">Add Task</button>
          </div>
          <ul className={ulStyle}>
            {task.map((currTask, index) => (
              <li key={index} className={liStyle}>
                <p className={pStyle}
                  style={{textDecoration: 
                            currTask.completed ? 'line-through' : 'none',                              color: currTask.completed ? 'green' : 'black' }}>
                  {currTask.text}
                </p>  

                <button className={`${btnStyles} ${chkBtnStyle} `} 
                  onClick={() => handleCompleted(index)} 
                  style={{textDecoration: 
                              task.completed ? 'line-through' : 'none' }}>
                    <MdCheck className="text-2xl" />
                </button>

                <button className={`${btnStyles} ${delBtnStyle}` }
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