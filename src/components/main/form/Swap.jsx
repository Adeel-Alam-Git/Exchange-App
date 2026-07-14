import { useContext } from "react";
import { CurrencyContext } from "../../../context/CurrencyProvider";

const Swap = () => {

    const {fromCurrency, setFromCurrency, toCurrency, setToCurrency} = useContext(CurrencyContext);

    return (
        <div className="flex justify-center items-center ">

            <button 
            onClick={() => {
                setFromCurrency(toCurrency)
                setToCurrency(fromCurrency)
            }} 
            type="button" 
            className="w-16 h-16 border border-[#999] rounded-[50%] text-2xl flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:text-my-yellow hover:rotate-180 active:scale-95 active:text-[#dd9300c9] ">

                <i className="fa-solid fa-arrows-rotate"></i>
            </button>
        </div>
    )
}

export default Swap;