import Date from "./Date";

const Header = () => {
    return (
        <header className="p-8 flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <h1 className="text-[2rem] font-bold font-sans ">Exch<span className="text-my-yellow ">ange</span></h1>

            <div className="text-[#999] text-[12px] mt-2 sm:mt-0 ">
                <p>Live ECB Rates</p>
                <p>Updated: <Date /></p>
            </div>
        </header>
    )
}

export default Header;