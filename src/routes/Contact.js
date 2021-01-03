import React from 'react'
import ContactInfoCard from '../components/ContactInfoCard'
import ContactForm from '../components/ContactForm'

const Contact = () => {
    return (
        <div className="contact-container">
            <ContactInfoCard />
            <ContactForm />
        </div>
    )
}

export default Contact