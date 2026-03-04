// ChecklistFlight.jsx
import Checklist from './Checklist';
import { preDefinedTasksFlight } from './predefinedTasks';
import { MdFlightTakeoff } from "react-icons/md";
import { h2Style } from '../styles';



export default function ChecklistFlight() {
  
  // This makes 'ChecklistFlight' the parent component and 'Checklist' the child
  return(
  <div className='text-black rounded-2xl vh-100 p-5
      bg-gradient-to-b from-[#d6e2ee] from-10% via-[#cee1f0] via-30% to-[#d7e6ed] to-90% 
      borer border-solid border border-[#e3effa]
      drop-shadow-xl drop-shadow-2xl'>
  <h2 className={h2Style}><MdFlightTakeoff className="text-3xl mr-2"/>Flight Journey Check List</h2>
  <Checklist initialTasks={preDefinedTasksFlight} />;
  </div>
  )
}
