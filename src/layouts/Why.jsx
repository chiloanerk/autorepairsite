import React from 'react';

const whyContent = [
    {
        title: "Expert Care",
        description: "As the sole owner and operator of [Your Business Name], I take pride in providing expert care for your Renault. With my years of experience and dedication to quality service, your vehicle is in trustworthy hands.",
        imageSrc: "images/w1.png",
    },
    {
        title: "Premium Materials",
        description: "I prioritize quality in every service. Using premium materials, I ensure that your Renault receives the finest components and parts available. Trust me to maintain and repair your vehicle with top-quality materials.",
        imageSrc: "images/w2.png",
    },
    {
        title: "Personalized Service",
        description: "At [Your Business Name], I am committed to offering a personalized service experience for every Renault owner. From diagnostics to repairs, count on me for attentive and efficient service tailored to your car's needs.",
        imageSrc: "images/w3.png",
    },
];

const WhyItem = ({ title, description, imageSrc }) => (
    <div className="col-md-6 col-lg-4 mx-auto">
        <div className="box">
            <div className="img-box">
                <img src={imageSrc} alt={title} />
            </div>
            <div className="detail-box">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    </div>
);

const Why = () => (
    <section id="why_section" className="why_section">
        <div className="container">
            <div className="heading_container heading_center">
                <h2>Why Choose Us</h2>
            </div>
        </div>
        <div className="container">
            <div className="row">
                {whyContent.map((item, index) => (
                    <WhyItem
                        key={index}
                        title={item.title}
                        description={item.description}
                        imageSrc={item.imageSrc}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default Why;
