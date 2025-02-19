import React from 'react';
import './works.css';
import portfolio6 from '../../assets/portfolio-6.png';
import ecommercepic from '../../assets/ecommerceproject2.jpg';

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae repellendus nesciunt quaerat quidem. Iusto officiis harum tenetur vel veniam. Perspiciatis maxime corrupti amet quia aspernatur porro quisquam omnis pariatur? Porro.
      </span>

      <div className="worksImgs">
        {/* E-Commerce Project */}
        <div className="card product-card">
          <div className="project-image">
            <a href="http://nagaecom.great-site.net/?i=1" target="_blank" rel="noreferrer">
              <img src={ecommercepic} alt="E-Commerce" />
            </a>
          </div>
          <div className="card-body">
            <p>For E-Commerce project instructions...</p>
            <div className="usedTech">
              <span>Used Technologies</span>
            </div>
          </div>
        </div>

        {/* FLAMES Project */}
        <div className="card product-card">
          <div className="project-image">
            <a href="D:\practice\Flames.html" target="_blank" rel="noreferrer">
              <img src={portfolio6} alt="Flames" />
            </a>
          </div>
          <div className="card-body">
            <p>For Flames project instructions...</p>
            <div className="usedTech">
              <span>Used Technologies</span>
            </div>
          </div>
        </div>


        <div className="card product-card">
          <div className="project-image">
            <a href="D:\practice\Flames.html" target="_blank" rel="noreferrer">
              <img src={portfolio6} alt="Flames" />
            </a>
          </div>
          <div className="card-body">
            <p>For Flames project instructions...</p>
            <div className="usedTech">
              <span>Used Technologies</span>
            </div>
          </div>
        </div>


        <div className="card product-card">
          <div className="project-image">
            <a href="D:\practice\Flames.html" target="_blank" rel="noreferrer">
              <img src={portfolio6} alt="Flames" />
            </a>
          </div>
          <div className="card-body">
            <p>For Flames project instructions...</p>
            <div className="usedTech">
              <span>Used Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
