import React, {useState, useEffect} from 'react'

function useCurrnecyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`)
        .then((res)=>res.json())
        .then((res)=> setData(res[currency]))
        console.log(data)
    },[currency])
    return [data, setData]
}

export default useCurrnecyInfo;

// chai code   https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json

//https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json
//https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json