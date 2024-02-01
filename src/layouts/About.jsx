import React from 'react';

const aboutContent = {
    heading: "About Us",
    text: `
    Welcome to Tops Auto, your trusted partner for Renault car care. 
    Our mission is to provide exceptional automotive services tailored to meet the specific needs of Renault owners. 
    With a passion for quality and customer satisfaction, we strive to ensure that every visit to our shop leaves you with a reliable and well-maintained Renault.
  `,
    imageSrc: "images/about-img.png",
};

const About = () => (
    <section id="about_section" className="about_section layout_padding">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="img-box">
                        <img src={aboutContent.imageSrc} alt={aboutContent.heading} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="detail-box">
                        <div className="heading_container">
                            <h2>{aboutContent.heading}</h2>
                        </div>
                        <p>{aboutContent.text}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;
