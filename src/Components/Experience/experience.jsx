import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      {/* <h5>The Skills I have</h5> */}
      <h2>My Skills</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Front-End Development</h3>
          <div className="experience_content">
            <article className="experience_detail">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_detail">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience_detail">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_detail">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_detail">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>React.Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_detail">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_frontend">
          <h3>Back-End Development</h3>
          <div className="experience_content">
            <article className="experience_detail">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>MongoDb</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience_detail">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Node.Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_detail">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Django</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_detail">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Sql</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_detail">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Express.Js</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience_detail">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Apache</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
