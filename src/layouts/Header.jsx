import {useEffect} from "react";

function Header() {
    useEffect(() => {
        const navLinks = document.querySelectorAll('.navbar-nav a');

        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            });
        });
    }, []);

    return (
        <>
            <header className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <a className="navbar-brand" href="index.html">
                            <span>Top's Auto</span>
                        </a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className=""> </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Home <span
                                        className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about_section"> About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#service_section">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#why_section">Why Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact_section">Contact Us</a>
                                </li>
                            </ul>
                            <div className="quote_btn-container">
                                <a href="">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <span>
                Call : +27 81 234 5678
              </span>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;