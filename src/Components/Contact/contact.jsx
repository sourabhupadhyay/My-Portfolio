import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BsGithub } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef();

  // Function to play the form submit tone
  const playFormSubmitTone = () => {
    const audio = new Audio('/form-submit-tone.mp3');
    audio.play();
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b66o6jb', 'template_ed594fe', form.current, 'rUKguY6w2n-WXfZlu')
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank You For Contacting Me",
            showConfirmButton: false,
            timer: 2000,
          });
          playFormSubmitTone(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option_icon' />
            <h4>Email</h4>
            <h5>upadhyaysouarbh12@gamil.com</h5>
            <a href="mailto:upadhyaysouarbh12@gamil.com">Send message</a>
          </article>

          <article className="contact_option">
            <BsGithub className='contact_option_icon' />
            <h4>Github</h4>
            <h5>github.com/sourabhupadhyay</h5>
            <a href="https://github.com/sourabhupadhyay">Open</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='user_name' placeholder='Your Name' required />
          <input type="email" name='user_email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
