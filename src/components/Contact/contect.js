import React,{useRef} from 'react';
import './contect.css'; 
import FacebookIcon from '../../assets/facebook2.png';
import TwitterIcon from '../../assets/twitter1.png';
import InstagramIcon from '../../assets/instagram1.png';
import LinkedInIcon from '../../assets/linkedin2.png';
import GitHub from '../../assets/github2.png';
import emailjs from '@emailjs/browser';

const Contact = () => { 
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

      const name = form.current.from_name.value.trim();
      const email = form.current.from_email.value.trim();
      const message = form.current.message.value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields before submitting.");
        return;
      }

    emailjs.sendForm('service_fxjoghm', 'template_vtdelkw', form.current, 'E4w6275R6_TrGxfEb')
        .then(() => {
          console.log('SUCCESS!');
          form.current.reset();
          alert('Message sent successfully');
        },(error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <section id="contact"> {/* Fixed id spelling */}
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">
        Please fill out the form below to discuss any work opportunities
      </span>
      
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Your Name.." name='from_name' />
        <input type="email" className="email" placeholder="Your Email.." name='from_email' />
        <textarea 
          className="message" 
          name='message'
          placeholder="Your Message.."
          rows="5"
        ></textarea>
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
       <br />
      <h6>OR</h6>
      <h4>To Reach Me..</h4>
      <span>Mobile Number :- 6380700376</span>
      <span>Email :- nagarajantr07@gmail.com | trnagaram2003@gmail.com</span>

      <div className="links">
        <a href="https://linkedin.com/in/nagarajan-t-r-79b158258" target="_blank" rel="noreferrer">
          <img src={LinkedInIcon} alt="LinkedIn" className="link" />
        </a>
        <a href="https://github.com/nagarajan-tr" target="_blank" rel="noreferrer">
          <img src={GitHub} alt="GitHub" className="link" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <img src={FacebookIcon} alt="Facebook" className="link" />
        </a>
        <a href="https://x.com/NagaRajan294635" target="_blank" rel="noreferrer">
          <img src={TwitterIcon} alt="Twitter" className="link" />
        </a>
        <a href="https://www.instagram.com/_naga___07/?hl=en" target="_blank" rel="noreferrer">
          <img src={InstagramIcon} alt="Instagram" className="link" />
        </a>
      </div>
    </section>
  );
};

export default Contact;