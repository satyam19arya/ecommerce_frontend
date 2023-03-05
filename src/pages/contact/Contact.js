import React from 'react';
import './Contact.scss';
// import { MdOutlineEmail } from 'react-icons/md';
// import { BsLinkedin } from 'react-icons/bs';
// import { BsWhatsapp } from 'react-icons/bs';

import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { MessengerChat } from "react-messenger-chat-plugin";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2crac8w', 'template_3uopgza', form.current, 'ZQdDY_A9RQX5fz5RM')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };

    return(
        <div>
            <section className='contact'>
                <h3>Contact us</h3>

                <div className='container contact_container'>
                    {/* <div className='contact_options'>
                        <article className='contact_option'>
                            <MdOutlineEmail className='logo'/>
                            <h4>Email</h4>
                            <a href="mailto:satyam19arya@gmail.com" target="__blank">Send mail</a>
                        </article>

                        <article className='contact_option'>
                            <BsLinkedin className='logo'/>
                            <h4>LinkedIn</h4>
                            <a href="https://www.linkedin.com/in/satyam-arya-101764205/" target="__blank">Send a message</a>
                        </article>

                        <article className='contact_option'>
                            <BsWhatsapp className='logo'/>
                            <h4>WhatsApp</h4>
                            <a href="https://api.whatsapp.com/send?phone=9452851038" target="__blank">Send a message</a>
                        </article>
                    </div> */}

                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Enter your name' required />
                        <input type="email" name='email' placeholder='Enter your email' required />
                        <textarea name="message" rows="7" placeholder="Your message" required></textarea>
                        <button type='submit' className='btn-primary'>Send Message</button>
                    </form>
                </div>
                <MessengerChat
                pageId="1013991418744704"
                language="sv_SE"
                themeColor={"#000000"}
                bottomSpacing={50}
                loggedInGreeting="loggedInGreeting"
                loggedOutGreeting="loggedOutGreeting"
                greetingDialogDisplay={"show"}
                debugMode={true}
                onMessengerShow={() => {
                console.log("onMessengerShow");
                }}
                onMessengerHide={() => {
                console.log("onMessengerHide");
                }}
                onMessengerDialogShow={() => {
                console.log("onMessengerDialogShow");
                }}
                onMessengerDialogHide={() => {
                console.log("onMessengerDialogHide");
                }}
                onMessengerMounted={() => {
                console.log("onMessengerMounted");
                }}
                onMessengerLoad={() => {
                console.log("onMessengerLoad");
                }}
            />,
            </section>
        </div>
    );
}

export default Contact;