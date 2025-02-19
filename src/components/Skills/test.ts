import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
import Html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
// import bootstrap from '../../assets/bootstrap.png';
import jquery from '../../assets/jquery.png';
import php from '../../assets/php1.png';
import laravel from '../../assets/laravel.png';
import mysql from '../../assets/mysql.png';
import react from '../../assets/react.png';
import ecommerce from '../../assets/ecommerceproject.jpg';
import flames from '../../assets/flames.jpg';
import technical from '../../assets/technical4.jpg';
import { Link } from 'react-scroll';
import seework from '../../assets/seework2.png';

const Skills = () => {
  return (
    <section id='skills'>
      <h1 className='skillTitle'>Technologies</h1>
      <div className="skillImgs">
        <img src={Html} alt="html" className="skillImg" />
        <img src={css} alt="css" className="skillImg" />
        <img src={js} alt="css" className="skillImg" />
        <img src={jquery} alt="jquery" className="skillImg" />
        <img src={php} alt="php" className="skillImg" />
        <img src={laravel} alt="laravel" className="skillImg" />
        <img src={mysql} alt="mysql" className="skillImg" />
        <img src={react} alt="react" className="skillImg" />
      </div>
      <p className="skillDesc">
      I specialize in full-stack web development, using HTML, CSS, Bootstrap, JavaScript, jQuery, and AJAX for dynamic front-end designs. On the back end, I work with PHP, Laravel, and MySQL for secure, scalable applications. I also have experience with React.js for high-performance UIs.
      </p>
      {/* I specialize in full-stack web development, focusing on building interactive and 
        user-friendly applications. I have worked on designing and developing an 
        **E-commerce website**, implementing both front-end and back-end functionalities. 
        Additionally, I have created a **FLAMES game**, enhancing user engagement with 
        dynamic and interactive UI. */}
      <div className="skillBars">
        <div className="skillBar">
          <img src={ecommerce} alt="E-Commerce" className="skillBarImg" />
          <div className="skillBarText">
            <h2>E-Commerce Website</h2>
              Developed a full-fledged E-commerce platform with key features including:
              <ul>
                <li>User authentication and profile management.</li>
                <li>Product catalog with search and filter options.</li>
                <li>Shopping cart functionality with real-time updates.</li>
                <li>Secure checkout process integrated with payment gateways.</li>
                <li>Admin panel for inventory management and order processing.</li>
              </ul>
              <Link activeClass='active' to='works' spy={true} smooth={true} offset={-60} duration={500} ><button className="seebtn"><img src={seework} alt="See work" className='seebtnImg' />See My Work</button></Link>
          </div>
        </div>

        <div className="skillBar">
          <img src={flames} alt="Flames game" className="skillBarImg" />
          <div className="skillBarText">
            <h2>FLAMES Game</h2>
            <p>
              Designed and implemented a **FLAMES game** using JavaScript and CSS, 
              featuring interactive UI and logic-driven results.
            </p>
              <Link activeClass='active' to='works' spy={true} smooth={true} offset={-60} duration={500} ><button className="seebtn"><img src={seework} alt="See work" className='seebtnImg' />See My Work</button></Link>
            </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="Portfolio" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Portfolio</h2>
            <p>
              Built using HTML, CSS, and React.js, this portfolio showcases my front-end development skills with a 
              responsive design, seamless navigation, and an interactive user experience.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="Portfolio" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Social Media App - Web Development</h2>
            <p>
              Give me for instruction basic--Using react and axios api and crud
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="Portfolio" className="skillBarImg" />
          <div className="skillBarText">
            <h2>To Do List - Web Development</h2>
            <p>
              using react js and for crud
            </p>
          </div>
        </div>


        <div className="skillBar">
          <img src={technical} alt="Technical Skills" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Technical Skills</h2>
              I have experience working with the following technologies:
              <ul>
                <li>Front-end: HTML, CSS, Bootstrap, JavaScript, jQuery, React.js</li>
                <li>Back-end: PHP, Laravel, AJAX</li>
                <li>Database: MySQL</li>
              </ul>
          </div>
        </div>
        

      </div>
    </section>
  );
};

export default Skills;
