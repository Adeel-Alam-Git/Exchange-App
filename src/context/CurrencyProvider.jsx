import { createContext, useState } from "react";
import { currencies } from "../assets/currencies";

export const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {

    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("PKR");

    return (
        <CurrencyContext.Provider
            value={{
                currencies,
                amount,
                setAmount,
                fromCurrency,
                setFromCurrency,
                toCurrency,
                setToCurrency,
            }}
        >
            {children}
        </CurrencyContext.Provider>
    );
}