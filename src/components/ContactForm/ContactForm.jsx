import React from 'react'

function ContactForm() {
    return (
        <>
            <div className="contact_container">
                <h2>Fill out the form below to contact us directly:</h2>
                <form action="https://formsubmit.co/b9498839c8d5904e7cf3f250dc8f3ca2" method="POST">
                    <text>Name:</text>
                    <input type="name" name="name" required/>
                    <text>Email:</text>
                    <input type="email" name="email" required/>
                    <text>Message:</text>                        
                    <input type="text" name="text" required/> 
                    {/* TODO: thank you page redirect
                        <input type="hidden" name="_next" value="localhost:3000"></input>*/}
                    <button type="submit" name="submit">Submit</button>                       
                </form> 
            </div>
        </>
    )
}

export default ContactForm
