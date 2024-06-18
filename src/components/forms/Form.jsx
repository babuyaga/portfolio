import React from 'react';
import { useState } from 'react';
import './form.scss';


const Form = ({appinfo}) => {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateEmail(email)) {
        setMessage('Please enter a valid email address.');
        return;
    }

    // Example API call to your backend
    try {
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        if (response.ok) {
            setMessage('Thank you for subscribing!');
            setEmail('');
        } else {
            setMessage('Subscription failed. Please try again.');
        }
    } catch (error) {
        setMessage('An error occurred. Please try again.');
    }
};



  return (
    <><span className="mail__text" id="mail__text_title">Join my mailing list</span>
    <span className="mail__text">Join my mailing list to stay in the loop with latest product builds, case studies, and design files</span>
    <>  
    <form className="mailing__list_form"><input onChange={(e) => setEmail(e.target.value)} value={email} required type="email" placeholder="Your email address" className="mailing__list_input"></input><button onClick={handleSubmit} className="home__button" id="mailing__list_button">Join</button></form>
    <span className="form-error"> {message && <p>{message}</p>}</span>
    </>
</>
  )
}

export default Form