import React from 'react';

const infoContent = {
    contactLinks: [
        {
            icon: "fa fa-map-marker",
            text: "Location",
        },
        {
            icon: "fa fa-phone",
            text: "Call +01 1234567890",
        },
        {
            icon: "fa fa-envelope",
            text: "demo@gmail.com",
        },
    ],
};

const InfoLink = ({ icon, text }) => (
    <div className="info-link">
        <a href="#" className="link-box">
            <i className={icon} aria-hidden="true"></i>
            <span>{text}</span>
        </a>
    </div>
);

const Info = () => (
    <section className="info_section">
        <div className="info_container">
            <div className="container">
                <div className="info-row">
                    <div className="info-col">
                        <div className="info_contact">
                            <div className="info-links d-flex justify-content-around flex-column flex-md-row">
                                {infoContent.contactLinks.map((link, index) => (
                                    <InfoLink key={index} icon={link.icon} text={link.text} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info_logo">
                    <a className="navbar-brand" href="index.html">
                        <span>Top's Auto</span>
                    </a>
                </div>
                <div className="social-box">
                    <a href="">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href="">
                        <i className="fa fa-youtube" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default Info;
