import React from 'react';

const sliderItems = [
    {
        title: "Renault Car Service & Repairs",
        description: "Get personalized service and expert repairs for your Renault vehicle. I specialize in providing top-notch maintenance, ensuring your Renault runs smoothly on the road.",
        imageSrc: "images/slider-img.png"
    },
    {
        title: "Renault Engine Diagnostics",
        description: "Ensure your Renault's engine is in peak condition with advanced diagnostics. I use state-of-the-art equipment to identify and address any engine-related issues promptly.",
        imageSrc: "images/slider-img.png"
    },
    {
        title: "Renault Brake System Specialists",
        description: "Safety is my priority. Rely on my expertise in Renault brake systems to keep you and your passengers safe on the road. From brake inspections to repairs, I've got your Renault covered.",
        imageSrc: "images/slider-img.png"
    },
    // Add more objects for additional slides
];
const SliderItem = ({ title, description, imageSrc, isActive }) => (
    <div className={`carousel-item ${isActive ? 'active' : ''}`}>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-5">
                    <div className="detail-box">
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <div className="btn-box">
                            <a href="" className="btn-1">
                                Read More
                            </a>
                            <a href="" className="btn-2">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-7">
                    <div className="img-box">
                        <img src={imageSrc} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Slider = () => (
    <section className="slider_section">
        <div id="sliderCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {sliderItems.map((item, index) => (
                    <SliderItem
                        key={index}
                        title={item.title}
                        description={item.description}
                        imageSrc={item.imageSrc}
                        isActive={index === 0} // Set the first item as active
                    />
                ))}
            </div>
            <ol className="carousel-indicators">
                {sliderItems.map((item, index) => (
                    <li key={index} data-target="#sliderCarousel" data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
                ))}
            </ol>
        </div>
    </section>
);

export default Slider;
