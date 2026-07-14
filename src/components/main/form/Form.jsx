import From from "./From";
import Swap from "./Swap";
import To from "./To";

const Form = () => {

    return (
        <form className="flex flex-col gap-8 sm:px-24 md:px-0 md:flex-row border-b border-b-[#999] border-dashed pb-8">
            <From />
            <Swap />
            <To />
        </form>
    )
}

export default Form;