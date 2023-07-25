import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

class Skills extends Component {
  render() {
    return (
      <>
        <section id="skills">
          <div id="skills-content">
            <div className="row">
              <div className="col-md-6 px-5 py-3 w-100">
                <div>
                  <h1>Skills</h1>
                  <h3>My Skills</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 px-5 py-3">
                <div>
                  <p>
                    My skills include frontend development using HTML5, CSS, and
                    JavaScript. I am comfortable working with jQuery to enhance
                    interactivity, and I have some experience with React for
                    building dynamic web applications.
                  </p>
                </div>
              </div>
              <div className="col-md-6 px-5 py-3">
                <div>
                  <p>
                    In terms of backend development, I possess knowledge of PHP
                    for server-side scripting and MySQL for efficient data
                    management. Additionally, I have the ability to manage
                    client and server-based servers and services. As a student,
                    I consider myself at an intermediate level in these areas.
                  </p>
                </div>
              </div>
            </div>
            <div id="progress-container" className="row ">
              <div className="col-md-6 px-4 py-3">
                <ProgressBar now={95} label="HTML5" />
                <ProgressBar now={95} label="CSS" />
                <ProgressBar now={75} label="Javascript" />
                <ProgressBar now={80} label="JQuery" />
                <ProgressBar now={85} label="Bootstrap" />
                <ProgressBar now={70} label="Powershell" />
              </div>
              <div className="col-md-6 px-4 py-3">
                <ProgressBar now={30} label="React" />
                <ProgressBar now={80} label="PHP" />
                <ProgressBar now={80} label="MySQL" />
                <ProgressBar now={90} label="SASS, Less" />
                <ProgressBar
                  now={90}
                  label="Windows, Linux client and server management"
                />
                <ProgressBar now={70} label="Bash" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Skills;
