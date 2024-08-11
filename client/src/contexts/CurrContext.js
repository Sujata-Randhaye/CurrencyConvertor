import { createContext,useContext } from "react";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

const CurrContext=createContext({
    amount:0,
    from:"inr",
    to:"usd",
    convertedAmount:0,
    

    swap:()=>{},
    convert:()=>{}
})

export const CurrContextProvider=CurrContext.Provider;

export const useCurr=()=>{
    return useContext(CurrContext);
}