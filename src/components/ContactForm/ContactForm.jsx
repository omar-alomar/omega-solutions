import React from 'react'
import './ContactForm.css'

// Source: https://codepen.io/JonLehman/pen/yOdbOG

function ContactForm() {
    return (
        <>
            <div className="contact_container">
                 <form action="https://formsubmit.co/omaro2000@gmail.com" method="POST">
                    <div class="container">
                        <div class="row">
                                <h1>Contact Us</h1>
                        </div>
                        <div class="row">
                                <h4>We'd love to hear from you!</h4>
                        </div>
                        <div class="row input-container">
                                <div class="col-xs-12">
                                    <div class="styled-input wide">
                                        <input type="text" name="fname" required />
                                        <label>Name</label> 
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <div class="styled-input">
                                        <input type="email" name="email"required />
                                        <label>Email</label> 
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <div class="styled-input" style={{float:"right"}}>
                                        <input type="tel" name="tel" required />
                                        <label>Phone Number</label> 
                                    </div>
                                </div>
                                <div class="col-xs-12">
                                    <div class="styled-input wide">
                                        <textarea name="msg" required></textarea>
                                        <label>Message</label>
                                    </div>
                                </div>
                                <div class="col-xs-12">
                                    <button class="submit">Send Message</button>
                                </div>
                        </div>
                    </div>

                </form>
            </div>
        </>
    )
}

export default ContactForm