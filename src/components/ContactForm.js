import React from 'react'

const ContactForm = () => {
    return (
        <div className="contact-form">
            <form action="mailto:someone@example.com" method="post" encType="text/plain">
                <p>First Name</p>
                <input className="contact-input" type="text"></input>
                <p>Last Name</p>
                <input className="contact-input" type="text"></input>
                <p>Email</p>
                <input className="contact-input" type="email"></input>
                <p>Message</p>
                <textarea rows="5" cols="50"></textarea>
                <button type="submit" className="apply-btn"><h3>Send</h3></button>
            </form>
        </div>
    )
}

export default ContactForm