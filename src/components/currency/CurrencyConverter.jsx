
import React, {useState, useEffect } from 'react'
import {InputBox} from './index'
import useCurrencyInfo from './useCurrencyInfo'
import { BsCurrencyExchange } from "react-icons/bs";
import { btnStyles } from '../styles';
import { h2Style } from '../styles';


function CurrencyConverter() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

//Swap two variables
const swap = () => {
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}

const convert = () => {
  setConvertedAmount(amount * currencyInfo[to])
}
//  const h2Style = 'flex align-center font-semibold text-xl';

    return (
        <div className='text-black rounded-2xl vh-100 p-5
      bg-gradient-to-b from-[#d6e2ee] from-10% via-[#cee1f0] via-30% to-[#d7e6ed] to-90% 
      borer border-solid border border-[#e3effa]
      drop-shadow-xl drop-shadow-2xl'>
        {/* <div
            className="w-full rounded flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/1055081/pexels-photo-1055081.jpeg?_gl=1*s5v6z0*_ga*MjA0NjQxNzg5My4xNzU3OTQxMjk3*_ga_8JE65Q40S6*czE3NTc5NDEyOTckbzEkZzEkdDE3NTc5NDEzNzMkajU5JGwwJGgw')`,
            }}
        > */}
            
            <h2 className={h2Style}><BsCurrencyExchange /> Currency Converter</h2>
            <div className="w-full">
                <div className="w-full rounded max-w-md mx-auto p-5 backdrop-blur-sm bg-white/30">              
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencychange={(currency) => setAmount(amount)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>

                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className={`${btnStyles}, absolute left-1/2 -translate-x-1/2 -translate-y-1/2`}
                                // className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                                
                            >
                                swap
                            </button>
                        </div>

                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                 label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencychange={(currency) => setTo(currency)}
                                selectCurrency={from}
                                amountDisable
                            />
                        </div>

                        <button type="submit" 
                        className={`${btnStyles}, 
                        w-full px-4 py-3 rounded-lg bg-[#5183a8]`}>
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                         {/* <button className={addTaskBtn} type="submit">Add Task</button> */}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CurrencyConverter;
