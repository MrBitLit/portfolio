import React, { Component } from "react";
import Typewriter from "typewriter-effect";

class Hero extends Component {
  state = {
    selectedLanguage: "english", // Default selected language
  };

  handleLanguageChange = (event) => {
    this.setState({ selectedLanguage: event.target.value });
  };

  render() {
    const isNavbarVisibleOnMobile = true; // Set this value based on the visibility of the navbar-header component on mobile devices

    const cvFiles = {
      english: "Besic_Omar_Curriculum_Vitae_english.pdf",
      french: "Besic_Omar_Curriculum_Vitae_francais.pdf",
      german: "Besic_Omar_Curriculum_Vitae_deutsch.pdf",
    };

    const selectedCVFile = cvFiles[this.state.selectedLanguage];

    return (
      <>
        <section
          id="hero"
          className={`container ${
            isNavbarVisibleOnMobile ? "navbar-visible" : ""
          }`}
        >
          <div className="row align-items-center mt-5">
            {/* Hero Content Container */}
            <div id="hero-content">
              <h2 className="mb-4">Hello, I am</h2>
              <h1 className="mb-4">Bešić Omar</h1>
              {/* Typewriter content */}
              <div id="infoJob" className="mb-3">
                {/* Loop for repeating typing process */}
                <Typewriter
                  options={{
                    loop: true,
                    autoStart: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "<h3 style='display:inline;'>I am frontend developer.</h3>"
                      )
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString(
                        "<h3 style='display:inline;'>I am backend developer.</h3>"
                      )
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString(
                        "<h3 style='display:inline;'>I am fullstack developer.</h3>"
                      )
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString(
                        "<h3 style='display:inline;'>I am web developer.</h3>"
                      )
                      .pauseFor(1000)
                      .deleteAll()
                      .start();
                  }}
                />
              </div>
              <span className="pt-3">
                I specialize in developing stylish, modern websites, web
                services, and online stores, with expertise in both frontend and
                backend development. I am also enthusiastic about learning new
                technologies to further enhance my skills.
              </span>

              <br />

              <div id="cv-container" className="mt-5">
                <label htmlFor="cvLanguage">Select CV Language:</label>
                <select
                  id="cvLanguage"
                  value={this.state.selectedLanguage}
                  onChange={this.handleLanguageChange}
                >
                  <option value="english">English</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                </select>
              </div>

              <br />
              <a
                className="btn btn-success mt-3"
                href={`../../assets/PDF/${selectedCVFile}`}
                download={selectedCVFile}
              >
                Download CV
              </a>
            </div>
            {/* Image Container */}
            <div id="hero-img-container">
              <div className="d-flex align-items-center justify-content-center h-100">
                <img
                  src="../../assets/images/my_pictures/Besic_Omar_Laptop.png"
                  alt="Hero Image"
                  loading="lazy"
                  decoding="async"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="seperated"></div>
      </>
    );
  }
}

export default Hero;
