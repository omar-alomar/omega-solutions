import React from 'react'
import './ContactForm.css'

// Source: https://codepen.io/JonLehman/pen/yOdbOG

function ContactForm() {
    return (
        <>
            <div className="contact_container">
                 <form action="https://formsubmit.co/hello@omegasolutions.tech" method="POST">
                    <div className="container">
                        <div className="row">
                                <h1>Contact Us</h1>
                        </div>
                        <div className="row">
                                <h4>We'd love to hear from you!</h4>
                        </div>
                        <div className="row input-container">
                                <div className="col-xs-12">
                                    <div className="styled-input wide">
                                        <input type="text" name="fname" required />
                                        <label>Name</label> 
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="styled-input">
                                        <input type="email" name="email"required />
                                        <label>Email</label> 
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="styled-input" style={{float:"right"}}>
                                        <input type="tel" name="tel" required />
                                        <label>Phone Number</label> 
                                    </div>
                                </div>
                                <div className="col-xs-12">
                                    <div className="styled-input wide">
                                        <textarea name="msg" required></textarea>
                                        <label>Message</label>
                                    </div>
                                </div>
                                <div className="col-xs-12">
                                    <button className="submit">Send Message</button>
                                </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactForm