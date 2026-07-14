import { useContext } from "react";
import { CurrencyContext } from "../../context/CurrencyProvider";
import { RateContext } from "../../context/RatesProvider";

const Result = () => {

    const { fromCurrency, toCurrency } = useContext(CurrencyContext);
    const { rates } = useContext(RateContext);



    return (
        <div className="py-8 ">
            <p id="result-passage">
                1 {fromCurrency} = {rates?.[toCurrency] ?? "..."} {toCurrency}
            </p>
        </div>
    ) 
}

export default Result;