import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { CurrencyContext } from "./CurrencyProvider";

export const RateContext = createContext();

export const RatesProvider = ({ children }) => {
  const { fromCurrency } = useContext(CurrencyContext);

  const [rates, setRates] = useState({});
  const [lastUpdate, setLastUpdate] = useState("");

  const getExchangeRates = async () => {
    if (!fromCurrency) return;

    try {
      const { data } = await axios.get(`/api/latest?base=${fromCurrency}`);

      setRates(data.conversion_rates);

      const update = new Date(data.time_last_update_utc);
      setLastUpdate(update.toDateString());
    } catch (err) {
      console.error("Error fetching exchange rates:", err);
    }
  };

  useEffect(() => {
    getExchangeRates();
  }, [fromCurrency]);

  return (
    <RateContext.Provider
      value={{
        rates,
        lastUpdate,
      }}
    >
      {children}
    </RateContext.Provider>
  );
};