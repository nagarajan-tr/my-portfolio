import React from 'react';
import './skills.css';
import Html from '../../assets/html.png';
import Css from '../../assets/css.png';
import Js from '../../assets/js.png';
import JQuery from '../../assets/jquery.png';
import Php from '../../assets/php1.png';
import Laravel from '../../assets/laravel.png';
import Mysql from '../../assets/mysql.png';
import ReactJs from '../../assets/react.png';
import Technical from '../../assets/technical4.jpg';

const Skills = () => {
  return (
    <section id="skills">
      <h1 className="skillTitle">Technical Skills</h1>
      <p className="skillDesc">
        I specialize in full-stack web development, focusing on both front-end and back-end technologies.
      </p>
      
      <div className="skillImgs">
        <img src={Html} alt="HTML" className="skillImg" />
        <img src={Css} alt="CSS" className="skillImg" />
        <img src={Js} alt="JavaScript" className="skillImg" />
        <img src={JQuery} alt="jQuery" className="skillImg" />
        <img src={Php} alt="PHP" className="skillImg" />
        <img src={Laravel} alt="Laravel" className="skillImg" />
        <img src={Mysql} alt="MySQL" className="skillImg" />
        <img src={ReactJs} alt="React" className="skillImg" />
      </div>

      <div className="skillBar">
        <img src={Technical} alt="Technical Skills" className="skillBarImg" />
        <div className="skillBarText">
          <h2>Tech Stack</h2>
          <ul className='lists'>
            <li><strong>Front-end:</strong> HTML, CSS, Bootstrap, JavaScript, jQuery, React.js</li>
            <li><strong>Back-end:</strong> PHP, Laravel, AJAX</li>
            <li><strong>Database:</strong> MySQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
