import React from "react";
import blood from "/img/blood.jpg";
import Event from "/img/Event.jpg";
import study from "/img/study.jpg";
import "./project.css";

const Project = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="container project_container">
        <article className="project_item">
          <div className="project_item_image">
            <img src={study} alt="" />
          </div>
          <h3>Poornima Study Portal</h3>
          <small className="text-light">Html,Css,Javascript,Sql</small>
          <div className="project_item_btn">
            <a href="https://github.com/sourabhupadhyay" className="btn">
              Github
            </a>
          </div>
        </article>

        <article className="project_item">
          <div className="project_item_image">
            <img src={blood} alt="" />
          </div>
          <h3>BloodBank Mangment System</h3>
          <small className="text-light">
            Html,Css,Javascript,Django,Python
          </small>
          <div className="project_item_btn">
            <a href="https://github.com/sourabhupadhyay" className="btn">
              Github
            </a>
            {/* <a href="" className="btn">Demo</a> */}
          </div>
        </article>

        <article className="project_item">
          <div className="project_item_image">
            <img src={Event} alt="" />
          </div>
          <h3>Event Mangment System</h3>
          <small className="text-light">Html,Css,Javascript,Sql</small>
          <div className="project_item_btn">
            <a href="https://github.com/sourabhupadhyay" className="btn">
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Project;
