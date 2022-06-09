import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t44ohgn', 'template_y9krcif', form.current, 'XghR9crm_E23-f0z2')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>a way to</h5>
      <h2>contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>e-mail</h4>
            <h5>karlis@kane.pe</h5>
            <a href="mailto:karlis@kane.pe" target="_blank" rel='noreferrer'>send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>linkedin</h4>
            <a href="https://www.linkedin.com/in/kanepe/" target="_blank" rel='noreferrer'>check out</a>
          </article>
        </div>

      
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='name' required />
          <input type="email" name='email' placeholder='e-mail' required />
          <textarea name="message" rows="7" placeholder='message to deliver' required ></textarea>
          <button type='submit' className='btn btn-primary'>send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact