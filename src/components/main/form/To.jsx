import { useContext } from "react";
import { CurrencyContext } from "../../../context/CurrencyProvider";
import { RateContext } from "../../../context/RatesProvider";

const To = () => {
  const {
    amount,
    currencies,
    toCurrency,
    setToCurrency,
  } = useContext(CurrencyContext);

  const { rates } = useContext(RateContext);

  const result =
    !isNaN(amount) && rates?.[toCurrency]
      ? (Number(amount) * rates[toCurrency]).toFixed(2)
      : "Calculating...";

  return (
    <div className="flex flex-col gap-4 w-full">
      <label htmlFor="to-currency" className="text-[#999] text-[12px]">
        To
      </label>

      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        id="to-currency"
        className="p-4 bg-body-bg w-full border border-[#999]"
      >
        {Object.entries(currencies).map(([code, name]) => (
          <option key={code} value={code}>
            {code} - {name}
          </option>
        ))}
      </select>

      <input
        value={result}
        readOnly
        type="text"
        id="to-amount"
        className="p-4 bg-body-bg w-full border border-[#999]"
      />
    </div>
  );
};

export default To;