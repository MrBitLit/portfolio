import React from "react";
import { Nav } from "react-bootstrap";
import {
  FaBars,
  FaHome,
  FaUser,
  FaClipboard,
  FaImages,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Scrollspy from "react-scrollspy";

class SideNavbar extends React.Component {
  constructor(props) {
    super(props);

    // Initialize the component state
    this.state = {
      showNav: false, // Indicates whether the navigation is shown or hidden
    };
  }

  toggleNav = () => {
    // Function to toggle the navigation visibility
    this.setState((prevState) => ({
      showNav: !prevState.showNav, // Invert the showNav value on each toggle
    }));
  };

  render() {
    const { showNav } = this.state;

    return (
      <>
        {/* Navbar header, only visible for mobile devices */}
        <div className={`navbar-header ${showNav ? "show-nav" : ""}`}>
          <h3>Bešić Omar</h3>
          <div
            className={`hamburger-menu ${showNav ? "active" : ""}`}
            onClick={this.toggleNav}
          >
            {!showNav ? (
              <FaBars className="hamburger-icon" />
            ) : (
              <FaBars
                className="hamburger-icon active"
                style={{ transform: "rotate(90deg)" }}
              />
            )}
          </div>
        </div>
        {/* Scrollspy for scrolling automatically, by pressing nav links */}
        <Scrollspy
          className={`nav ${showNav ? "show-nav" : ""}`}
          items={["hero", "about-me", "services", "portfolio", "contact"]}
          currentClassName="active"
          offset={-100}
        >
          <Nav className={`flex-column ${showNav ? "show-nav" : ""}`}>
            {/* Avatar container */}
            <div className="avatar">
              <img
                src="../../assets/images/my_pictures/Besic_Omar_suit_transparent_zoomed.png"
                alt="Avatar"
                loading="lazy"
                decoding="async"
                draggable="false"
              />
              <h3 className="mt-3">Bešić Omar</h3>
            </div>
            {/* Navigation links */}
            <div className="align-nav-link">
              <Nav.Link href="#hero">
                <FaHome className="icon" />
                <span className="link-text">Home</span>
              </Nav.Link>
              <Nav.Link href="#about-me">
                <FaUser className="icon" />
                <span className="link-text">About Me</span>
              </Nav.Link>
              <Nav.Link href="#services">
                <FaClipboard className="icon" />
                <span className="link-text">Services</span>
              </Nav.Link>
              <Nav.Link href="#portfolio">
                <FaImages className="icon" />
                <span className="link-text">Portfolio</span>
              </Nav.Link>
              <Nav.Link href="#contact">
                <FaEnvelope className="icon" />
                <span className="link-text">Contact Me</span>
              </Nav.Link>
            </div>
            {/* Social Media Icons */}
            <div className="social-icons my-4">
              <a
                href="https://www.facebook.com/profile.php?id=100010545631651"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="social-icon" />
              </a>
              <a
                href="https://twitter.com/_besic_omar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="social-icon" />
              </a>
              <a
                href="https://www.instagram.com/besic.omar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/besic-omar-076911203/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="social-icon" />
              </a>
            </div>
          </Nav>
        </Scrollspy>
      </>
    );
  }
}

export default SideNavbar;
