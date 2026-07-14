import { useContext } from "react";
import { CurrencyContext } from "../../../context/CurrencyProvider";

const From = () => {

    const { currencies, amount, setAmount, fromCurrency, setFromCurrency } = useContext(CurrencyContext);

    return (
        <div className="flex flex-col gap-4 w-full ">

            <label
                htmlFor="from-currency"
                className="text-[#999] text-[12px] "
            >From</label>

            <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                name="from-currency"
                id="from-currency"
                className="p-4 bg-body-bg w-full border border-[#999] "
            >
                {Object.entries(currencies).map(([code, name]) => {

                    return (
                        <option key={code} value={code}>
                            {code} - {name} </option>
                    )
                })}
            </select>

            <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="text"
                name="from-amount"
                id="from-amount"
                className="p-4 bg-body-bg w-full border border-[#999] " />
        </div>
    )
}

export default From;