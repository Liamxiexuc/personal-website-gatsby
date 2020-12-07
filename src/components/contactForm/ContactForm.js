import React, { Fragment, useState } from "react"
import contactFormStyles from "./contactForm.module.scss"

const ContactForm = props => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    let showNameLabel = name ? {opacity: 1} : {opacity: 0};
    let showEmailLabel = email ? {opacity: 1} : {opacity: 0};
    let showMessageLabel = message ? {opacity: 1} : {opacity: 0};

    const handleInputChange = (event) => {
        const {id, value} = event.target;
        switch (id) {
            case 'name':
                setName(value)
                break;
            case 'email':
                setEmail(value)
                break;
            case 'message':
                setMessage(value)
                break;   
            default:
                break;
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        return '';
    }
    return (
        <Fragment>
            <form id="form" className={contactFormStyles.form}>
                <div className={contactFormStyles.formGroup}>
                    <label style={showNameLabel} className={contactFormStyles.label}>YOUR NAME</label>
                    <input onChange={handleInputChange} id='name' value={name} placeholder='YOUR NAME'></input>
                </div>
                <div className={contactFormStyles.formGroup}>
                    <label style={showEmailLabel} className={contactFormStyles.label}>YOUR EMAIL</label>
                    <input onChange={handleInputChange} placeholder='YOUR EMAIL' id='email'></input>
                </div>
                <div className={contactFormStyles.formGroup}>
                    <label style={showMessageLabel} className={contactFormStyles.label}>YOUR MESSAGE</label>
                    <textarea onChange={handleInputChange} id='message' className={contactFormStyles.message} placeholder="YOUR MESSAGE" />
                </div>
                <div className={contactFormStyles.formGroup}>
                    <button className={contactFormStyles.button} type="submit" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </Fragment>
    )
}

export default ContactForm