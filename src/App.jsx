
import './App.css'
import ChecklistTrain from './components/checklists/ChecklistTrain'
import ChecklistFlight from './components/checklists/ChecklistFlight'
import { FaTrain } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";

import CurrencyConverter from './components/currency/CurrencyConverter'
import Example1 from '../../react-hooks/use-reducer-hook1/src/Example1';
import WeatherApp from './components/WeatherApp';

function App() {
  
  const h2Style = 'flex align-center font-semibold text-xl'

  return (
    <>
   

    <div className="flex flex-wrap gap-4">
  <div className="w-[calc(100%-0.5rem)] sm:w-[calc(50%-0.5rem)]">
    <WeatherApp />
  </div>
  <div className="w-[calc(100%-0.5rem)] sm:w-[calc(50%-0.5rem)]">
    <ChecklistTrain />
  </div>
  <div className="w-[calc(100%-0.5rem)] sm:w-[calc(50%-0.5rem)]">
    <ChecklistFlight />
  </div>
  <div className="w-[calc(100%-0.5rem)] sm:w-[calc(50%-0.5rem)]">
    <CurrencyConverter />
  </div>
</div>
</>
  )
}

export default App
