import React from "react";
import './Contact.css'
import {SiGmail} from 'react-icons/si'
import {GrLinkedin} from 'react-icons/gr'
import {ImWhatsapp} from 'react-icons/im'
import {useRef} from "react";
import emailjs from 'emailjs-com'

const Contact = ()=>{
    const form  = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ts7vf3d','template_crti7ha',form.current,'bZ1_Z0FsFnGa3_S4Y')
        e.target.reset()
    }
    return (
        <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
            <div className="contact__options">
            <article className="contact__option">
                <SiGmail className="contact__option-icon"/>
                <h4>Email</h4>
                <h5>monusinghpersonal@gmail.com</h5>
                <a href="mailto:monusinghpersonal@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
            </article>

            <article className="contact__option">
                <GrLinkedin className="contact__option-icon"/>
                <h4>Linkedin</h4>
                <h5>Monu Kumar Singh</h5>
                <a href="https://www.linkedin.com/in/monu-kumar-singh-67363216b/" target="_blank" rel="noreferrer">Send a message</a>
            </article>

            <article className="contact__option">
                <ImWhatsapp className="contact__option-icon"/>
                <h4>WhatsApp</h4>
                <h5>+91-6201423890</h5>
                <a href="https://wa.me/+916201423890" target="_blank" rel="noreferrer">Send a message</a>
            </article>
            </div>


            <form action="" className="formlayout" ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Your Full Name" required/>
                <input type="email" name="email" placeholder="Your Email" required/>
                <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
                <button type="submit" className="btn btn-primary" >Send Message</button>

              

            </form>
          
        </div>
        </section>
    )
}

export default Contact;