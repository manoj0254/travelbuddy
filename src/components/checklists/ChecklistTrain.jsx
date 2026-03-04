// ChecklistTrain.jsx
import Checklist from './Checklist';
import { preDefinedTasksTrain } from './predefinedTasks';
import { FaTrain } from "react-icons/fa";
import { h2Style } from '../styles';

export default function ChecklistTrain() {
  
  return(
    <div className='text-black rounded-2xl vh-100 p-5
      bg-gradient-to-b from-[#d6e2ee] from-10% via-[#cee1f0] via-30% to-[#d7e6ed] to-90% 
      borer border-solid border border-[#e3effa]
      drop-shadow-xl drop-shadow-2xl'>
   <h2 className={h2Style}><FaTrain className="text-2xl mr-2"/>Train Journey Check List</h2>
   <Checklist initialTasks={preDefinedTasksTrain} />
   </div>
  );
}
