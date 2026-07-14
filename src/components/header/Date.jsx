import { useContext } from "react";
import { RateContext } from "../../context/RatesProvider";

const Update = () => {

    const { lastUpdate } = useContext(RateContext);

    return (
        <span> {lastUpdate} </span>
    )
}

export default Update;