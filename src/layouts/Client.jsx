import React from 'react';

const clientTestimonials = [
    {
        name: "Alexandra",
        role: "Renault Owner",
        testimonial: "As a Renault owner, I couldn't be happier with the personalized service and expertise provided by the mechanic. The attention to detail and commitment to ensuring my Renault runs smoothly is truly commendable.",
        imageSrc: "images/client.jpg"
    },
    {
        name: "Gabriel",
        role: "Satisfied Customer",
        testimonial: "The engine diagnostics service was exceptional. The mechanic's knowledge of Renault engines is impressive. Quick identification and resolution of issues ensure that my Renault always performs at its best.",
        imageSrc: "images/client.jpg"
    },
    {
        name: "Sophie",
        role: "Renault Enthusiast",
        testimonial: "Safety is a top priority for me, and the brake system specialists at this mechanic's shop have consistently delivered. Their expertise in Renault brake systems provides peace of mind on every drive.",
        imageSrc: "images/client.jpg"
    },
    // Add more objects for additional testimonials
];

const ClientTestimonial = ({ name, role, testimonial, imageSrc, isActive }) => (
    <div className={`carousel-item ${isActive ? 'active' : ''}`}>
        <div className="container">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="box">
                        <div className="img-box">
                            <img src={imageSrc} alt={name} />
                        </div>
                        <div className="detail-box">
                            <div className="client_info">
                                <div className="client_name">
                                    <h5>{name}</h5>
                                    <h6>{role}</h6>
                                </div>
                                <i className="fa fa-quote-left" aria-hidden="true"></i>
                            </div>
                            <p>{testimonial}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Client = () => (
    <section id="client_section" className="client_section layout_padding">
        <div className="container">
            <div className="heading_container heading_center">
                <h2>Testimonials</h2>
                <p>Discover what our Renault customers have to say about their experiences.</p>
            </div>
        </div>
        <div className="container px-0">
            <div id="clientCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {clientTestimonials.map((testimonial, index) => (
                        <ClientTestimonial
                            key={index}
                            name={testimonial.name}
                            role={testimonial.role}
                            testimonial={testimonial.testimonial}
                            imageSrc={testimonial.imageSrc}
                            isActive={index === 0} // Set the first testimonial as active
                        />
                    ))}
                </div>
                <div className="carousel_btn-box">
                    <a className="carousel-control-prev" href="#clientCarousel" role="button" data-slide="prev">
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#clientCarousel" role="button" data-slide="next">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default Client;
