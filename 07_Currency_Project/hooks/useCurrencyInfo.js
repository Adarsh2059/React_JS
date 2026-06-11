import {useEffect,useCase} from 'react'

function useCurrencyInfo(currency){
    useEffect(()=>{
        const [data,setdata]=useCase({});
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>{res.json()})
        .then((res)=>setdata(res[currency]))
    },[currency])
    return data
}

export default useCurrencyInfo;