function Contact() {
    return (
        <>
            <section id="contact_section" className="contact_section layout_padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form_container">
                                <div className="heading_container ">
                                    <h2>
                                        Get In Touch
                                    </h2>
                                </div>
                                <form action="#">
                                    <div>
                                        <input type="text" placeholder="Your Name"/>
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Your Email"/>
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Your Phone"/>
                                    </div>
                                    <div>
                                        <input type="text" className="message-box" placeholder="Message"/>
                                    </div>
                                    <div className="btn_box ">
                                        <button>
                                            SEND
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src="images/contact-img.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;