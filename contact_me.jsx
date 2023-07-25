import React, { Component } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

class Contact extends Component {
  state = {};
  render() {
    return (
      <>
        <section id="contact">
          <div id="contact-content" className="w-100">
            <div className="row">
              <div className="col-md-6 py-3 w-100">
                <div className="px-5">
                  <h1>Get In Touch</h1>
                  <p className="py-4">
                    Looking forward to hearing from you! Don't hesitate to get
                    in contact.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mx-lg-5 mx-3 mb-5">
              <div className="col-xl-8 py-lg-3">
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe
                      title="Google Maps"
                      width="100%"
                      height="500"
                      src="https://maps.google.com/maps?q=Diekirch&t=k&z=13&ie=UTF8&iwloc=&output=embed"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 mt-4 py-3 d-flex justify-content-center align-items-center">
                <div className="contact-info">
                  <div>
                    <FaMapMarkerAlt />
                    <span>Diekirch, Luxembourg</span>
                  </div>
                  <div>
                    <FaEnvelope />
                    <span>Omar@besicomar.com</span>
                  </div>
                  <div>
                    <FaPhone />
                    <span>+352 691 884 020</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;
