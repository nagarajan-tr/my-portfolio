import React from 'react'
import './intro.css';
import bg from '../../assets/image2.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';
import resume from '../../assets/resume.png';
import Nagarajan_resume from '../../assets/nagarajan.pdf';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className='hello'>
                Hello!
            </span>
            <span className='intoText'>I'm
                <span className="introName"> Nagarajan </span><br />
                Laravel Developer
            </span>
            <p className='introPara'>
               I am an experienced Full-Stack Web Developer specializing in Laravel, AJAX, jQuery,<br />
               JavaScript,  React.js, Bootstrap, CSS, HTML, SQL, and PHP. With a strong foundation <br />
               in both front-end and back-end development, I focus on building scalable,<br />
               high-performance applications that deliver seamless user experiences.
            </p>
            <button className='resumebtn' onClick={() => window.open(Nagarajan_resume, '_blank')}>
                <img src={resume} alt="resume" className='btnImg' /> Resume
            </button>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-60} duration={500}><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg' />Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro
