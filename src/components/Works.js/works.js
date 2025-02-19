import React from 'react';
import './works.css';
import flames from '../../assets/flames.jpg';
import ecommercepic from '../../assets/ecommerceproject2.jpg';
import socialmedia from '../../assets/socialmedia.jpg';
import todolist from '../../assets/todolist2.jpg';

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">
        Explore some of my recent projects showcasing my skills in web development.
      </span>

      <div className="worksImgs">
        {/* E-Commerce Project */}
        <div className="card product-card">
          <div className="project-image">
            <img src={ecommercepic} alt="E-Commerce" />
          </div>
          <div className="card-body">
            <h3>E-Commerce Project</h3>
            <ul>
              <li>User authentication and profile management.</li>
              <li>Product catalog with search and filter options.</li>
              <li>Shopping cart with real-time updates.</li>
              <li>Secure checkout with payment gateways.</li>
              <li>Admin panel for inventory and order management.</li>
            </ul>
            <p className="usedTech">Technologies: HTML, CSS, Bootstrap, jQuery, AJAX, PHP, Laravel, MySQL</p>
            <a href="http://nagaecom.great-site.net/?i=1" target="_blank" rel="noreferrer" className="visit-btn">Visit App</a>
          </div>
        </div>

        {/* FLAMES Project */}
        <div className="card product-card">
          <div className="project-image">
            <img src={flames} alt="Flames" />
          </div>
          <div className="card-body">
            <h3>FLAMES Game</h3>
            <ul>
              <li>Fun relationship compatibility calculator.</li>
              <li>Simple UI with dynamic results.</li>
            </ul>
            <p className="usedTech">Technologies: HTML, CSS, JavaScript</p>
            <a href="https://your-flames-app-link.com" target="_blank" rel="noreferrer" className="visit-btn">Visit App</a>
          </div>
        </div>

        {/* Social Media Project */}
        <div className="card product-card">
          <div className="project-image">
            <img src={socialmedia} alt="Social Media" />
          </div>
          <div className="card-body">
            <h3>Social Media App</h3>
            <ul>
              <li>CRUD operations: Create, Read, Update, Delete.</li>
              <li>Data fetching using Axios API.</li>
            </ul>
            <p className="usedTech">Technologies: ReactJS, CSS, Axios</p>
            <a href="https://react-social-media-app-rose.vercel.app/" target="_blank" rel="noreferrer" className="visit-btn">Visit App</a>
          </div>
        </div>

        {/* To-Do List */}
        <div className="card product-card">
          <div className="project-image">
            <img src={todolist} alt="To-Do List" />
          </div>
          <div className="card-body">
            <h3>To-Do List App</h3>
            <ul>
              <li>Add, search, and delete tasks.</li>
              <li>Task counter for productivity tracking.</li>
            </ul>
            <p className="usedTech">Technologies: ReactJS, CSS</p>
            <a href="https://react-to-do-list-app-tawny.vercel.app/" target="_blank" rel="noreferrer" className="visit-btn">Visit App</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
