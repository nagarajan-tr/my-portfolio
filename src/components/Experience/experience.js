import React from 'react';
import tcs from '../../assets/tcs.jpg';
import ifive from '../../assets/ifive.png';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h1 className="experienceTitle">Experience</h1>
      <p className="experienceDesc">
        "I have had the privilege of working with esteemed organizations, 
        gaining valuable experience across different roles. 
        Some of the notable companies I have worked with IFive Technology Private Ltd and Tata Consultancy Services, 
        where I honed my skills in Laravel development, PHP, database management, and business process execution. 
        These experiences have allowed me to contribute effectively to ERP and HRMS projects while also enhancing 
        my understanding of financial processes and team collaboration."
      </p>

      <div className="experienceContainer">
        {/* Experience Block 1 */}
        <div className="experienceBlock">
          <img src={ifive} alt="iFive" className="experienceImg" />
          <div className="experienceContent">
            <div className="experienceHeader">
              <h2>Laravel Developer - <span>IFive Technology Private Ltd</span></h2>
              <p className="experienceYear">Sep 2024 - Present</p>
            </div>
            <ul className="experiencePoints">
              <li>Hands-on Experience: Proficient as a PHP Laravel MVC Developer with practical experience.</li>
              <li>Dynamic Web Functionality: Actively contributed to ERP and HRMS software projects.</li>
              <li>Database Basics: Managing and querying data with MySQL to support application features.</li>
              <li>Tool: Experienced in using cPanel for application management.</li>
            </ul>
            <ul className="experienceTools">
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>PHP</li>
              <li>Laravel</li>
            </ul>
          </div>
        </div>

        {/* Experience Block 2 */}
        <div className="experienceBlock">
          <img src={tcs} alt="TCS" className="experienceImg" />
          <div className="experienceContent">
            <div className="experienceHeader">
              <h2>Process Execute - <span>Tata Consultancy Services</span></h2>
              <p className="experienceYear">Sep 2023 - Aug 2024</p>
            </div>
            <ul className="experiencePoints">
              <li>Basic understanding of accounting principles, accounts, and finance.</li>
              <li>Utilized tools like Phoenix Workspace, CSW, and Doczilla for project needs.</li>
              <li>Collaborated with the audit team to identify and correct errors.</li>
              <li>Provided regular motivation and floor support to team members.</li>
            </ul>
            <h3>Tools  :-</h3>
            <ul className="experienceTools">
              <li>PST</li>
              <li>PCT</li>
              <li>Phonix</li>
              <li>Doczilla</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;