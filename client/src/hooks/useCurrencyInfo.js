import { useEffect, useState } from "react";
/*
function useCurrencyInfo(currency) {
    const[data,setData]=useState({})
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    ).then((res)=>res.json())
    .then((res)=>setData(res[currency]))
  }, [currency]);
  console.log(data)
  return data;
}

export default useCurrencyInfo;
*/
/*
    here we are trying to fetch data from api if data is fetched
    then response is first converted into json and then we set data as 
    required currency from res

    here currency is going to change hence on each currency change api should 
    be called.
*/

//WAY 2

function useCurrencyInfo(currency) {
  const[data,setData]=useState({})
useEffect(() => {
  fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
  ).then((res)=>res.json())
  .then((res)=>setData(res[currency]))
}, [currency]);
console.log(data)
return data;
}

export default useCurrencyInfo;
