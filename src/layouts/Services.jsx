import React from 'react';

const servicesData = [
    {
        title: "General Maintenance",
        description: "Keep your Renault in optimal condition with our comprehensive general maintenance services. Our skilled technicians ensure that every aspect of your vehicle is checked and maintained for top performance.",
        imageSrc: "images/s1.png"
    },
    {
        title: "Repair and Replacement",
        description: "When it comes to repairs and replacements, trust our expertise to get your Renault back on the road. We use quality parts and efficient techniques to address issues and ensure the longevity of your vehicle.",
        imageSrc: "images/s2.png"
    },
    {
        title: "Tire Repair and Replacement",
        description: "Ensure your safety on the road with our tire repair and replacement services. From puncture repairs to full replacements, we've got your Renault's tires covered for a smooth and secure driving experience.",
        imageSrc: "images/s3.png"
    },
    {
        title: "Wheel Alignment",
        description: "Experience precise and smooth handling with our wheel alignment services. We use advanced technology to align your Renault's wheels accurately, enhancing tire longevity and fuel efficiency.",
        imageSrc: "images/s4.png"
    },
    {
        title: "Fuel System Repair",
        description: "Efficient fuel systems are crucial for optimal performance. Trust us for comprehensive fuel system repairs, ensuring that your Renault's engine receives the right fuel delivery for efficient and smooth operation.",
        imageSrc: "images/s5.png"
    },
    {
        title: "Tune Up",
        description: "Give your Renault the attention it deserves with our professional tune-up services. We fine-tune your vehicle for peak performance, addressing issues and optimizing its overall functionality.",
        imageSrc: "images/s6.png"
    },
    // Add more objects for additional services
];

const ServiceItem = ({ title, description, imageSrc }) => (
    <div className="col-md-6 col-lg-4">
        <div className="box">
            <div className="img-box">
                <img src={imageSrc} alt={title} />
            </div>
            <div className="detail-box">
                <h4>{title}</h4>
                <p>{description}</p>
                {/*<a href="">*/}
                {/*    Read More*/}
                {/*    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>*/}
                {/*</a>*/}
            </div>
        </div>
    </div>
);

const Services = () => (
    <section id="service_section" className="service_section">
        <div className="container">
            <div className="heading_container heading_center">
                <h2>Our Services</h2>
            </div>
        </div>
        <div className="container">
            <div className="row">
                {servicesData.map((service, index) => (
                    <ServiceItem
                        key={index}
                        title={service.title}
                        description={service.description}
                        imageSrc={service.imageSrc}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default Services;
