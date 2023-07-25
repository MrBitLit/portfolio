import React from "react";
import Skills from "./skills.jsx";

class About extends React.Component {
  render() {
    return (
      <>
        <section id="about-me">
          <div id="about-me-content">
            <div className="row">
              <div className="col-md-6 px-md-5 px-4 py-3 w-100">
                <div>
                  <h1>About Me</h1>
                  <h3>Passionate Web Developer with a Strong Foundation</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-md-6 px-md-5 px-4 py-3 border-right">
                <div>
                  <p>
                    My name is Besic Omar, and I have a background in computer
                    science. I attended Lycée des Arts et Métiers for five
                    years, where I studied various aspects of computer science
                    and web development. During my time in high school, I gained
                    experience in web development using technologies such as
                    HTML5, CSS3, JavaScript, PHP, and JQuery. I also learned
                    frameworks like Bootstrap and pre-processors like LESS and
                    SASS on my own during my high school time.
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-6 px-md-5 px-4 py-3">
                <div>
                  <p>
                    As part of a high school project spanning four weeks, I
                    embarked on the development of a web application. During
                    this period, I had the opportunity to select a Rest-API or
                    more and leverage JQuery for efficient data retrieval.
                    Although the option to incorporate PHP as a backend existed,
                    I determined that it was not necessary for the scope of my
                    web application. The focus of my project revolved around
                    basketball, wherein I created a comprehensive website
                    dedicated to NBA players. Users could explore a wealth of
                    player statistics and personal information, thereby
                    enhancing their knowledge and understanding of the sport. To
                    further engage users, I integrated an entertaining quiz
                    section that challenged their expertise on various aspects
                    of NBA players.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="left-scnd-row-col col-6 col-md-6 px-md-5 px-4 py-3 border-right">
                <div>
                  <p>
                    Throughout my high school years, I worked on several
                    projects that allowed me to apply my skills. In my first
                    year, I built a website using HTML and CSS. In the following
                    years, I expanded my knowledge by incorporating JavaScript
                    and PHP into my projects.
                    <br />
                    One of the notable projects was a webchat application, where
                    I utilized HTML, CSS, JavaScript, and PHP without a
                    database. In another project, I created a restaurant website
                    called Šadrvan, which incorporated HTML, CSS, JavaScript,
                    PHP, and MySQL as the backend.
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-6 px-md-5 px-4 py-3">
                <div>
                  <p>
                    In addition to my school projects, I have also worked on
                    personal projects at home. For example, I collaborated with
                    a friend to develop a freelancing website. We utilized HTML,
                    CSS, JavaScript, JQuery, PHP, MySQL, Bootstrap, and SASS to
                    build a feature-rich platform. These experiences have
                    allowed me to strengthen my problem-solving skills and
                    further develop my technical abilities.
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-6 px-md-5 px-4 py-3 border-right"></div>
              <div className="last-right-col col-6 col-md-6 px-md-5 px-4 py-3">
                <div>
                  <p>
                    As a person, I am known for my strong work ethic and
                    dedication to learning. I enjoy taking on new challenges and
                    expanding my knowledge in the ever-evolving field of web
                    development. While I may not consider myself a
                    lightning-fast learner, I am diligent and strive for a deep
                    understanding of the topics I study, often relying on
                    repetition to solidify my understanding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="seperated"></div>
        <Skills />
        <div className="seperated"></div>
      </>
    );
  }
}

export default About;
