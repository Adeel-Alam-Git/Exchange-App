const Footer = () => {

    return (
        <footer className="p-8 flex flex-col justify-center items-center md:flex-row md:justify-between">

                <p>Licensed under the MIT License.</p>

            <address className="text-ink text-[1.7rem] flex flex-row items-center gap-2">
                <a href="https://www.github.com/Adeel-Alam-Git/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                </a>

                <a href="https://www.linkedin.com/in/adeel-me/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                </a>

                <a href="https://www.x.com/_adeel_alam/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-x-twitter"></i>
                </a>

                <a href="https://www.instagram.com/_adeel_alam/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </address>
        </footer>
    )
}

export default Footer;
