import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContactForm from './contactForm'


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const form_styles={
            marginRight: "10%"
        }
        return (
          <div>
            <div
              id="social_media_container"
              style={{
                backgroundColor: "lightcoral",
                height: "80px",
                textAlign: "center",
              }}
            >
              <a
                href="https://www.instagram.com/mugsbottlesnmore/?hl=en"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={["fab", "instagram"]}
                  style={{ fontSize: "30px", marginTop: "20px" }}
                />
              </a>

              <a href="#whatsapp" target="blank">
                <FontAwesomeIcon
                  icon={["fab", "whatsapp"]}
                  style={{ fontSize: "30px", marginTop: "20px" }}
                />
              </a>
            </div>

            <footer className="footer">
              <div className="footer_container container-fluid bg-dark">
                <div className="row">
                  <div
                    className="col-md-3 footer-about-content"
                    id="footer_row"
                    style={{ marginLeft: "30px" }}
                  >
                    <h3 style={{ color: "white" }}> About us.</h3>
                    <p id="footer_content">
                      Mug, Bottles & More is a printing press company in Lagos,
                      Nigeria. We specialise in the customiztion of Mugs,
                      Bottles , Bags and others.
                    </p>
                    <p>
                      <a
                        href="/about"
                        target="_blank"
                        className="btn btn-outline-info"
                      >
                        <span style={{ color: "white" }}>
                          Read more &raquo;
                        </span>
                      </a>
                    </p>
                  </div>
                  <div className="col-md-3 " id="footer_row">
                    <h3> Contact us.</h3>
                    <p id="contact_content" style={{ width: "100%" }}>
                      <FontAwesomeIcon icon="envelope" id="icons" />
                      <span id="leading_words">Email:</span>
                      <a
                        href="mailto:mugsbottlesnmore@gmail.com"
                        target="blank"
                      >
                        mugsbottlesnmore@gmail.com
                      </a>
                    </p>
                    <p id="contact_content">
                      <FontAwesomeIcon icon="phone" id="icons" />
                      <span id="leading_words">Phone: </span>234 2941 5094
                    </p>
                    <p id="contact_content">
                      <a
                        href="https://www.instagram.com/mugsbottlesnmore/?hl=en"
                        target="blank"
                      >
                        <FontAwesomeIcon
                          icon={["fab", "instagram"]}
                          id="icons"
                          style={{ fontSize: "larger", marginTop: "20px" }}
                        />
                        Instagram
                      </a>
                    </p>
                    <p id="contact_content">
                      <a href="#twitter" target="blank">
                        <FontAwesomeIcon
                          icon={["fab", "twitter"]}
                          id="icons"
                          style={{ fontSize: "larger", marginTop: "20px" }}
                        />
                        Twitter
                      </a>
                    </p>
                  </div>
                  <ContactForm
                    formName="footerForm"
                    styles={form_styles}
                    header="Get a Quote."
                    formId1="form_styles1"
                    formId2="form_styles2"
                    className="col-sm-9 col-md-4 footer-form"
                    formId3="form_styles"
                    btnClass="btn btn-block btn-outline-primary"
                    formWrapper="footer_row"
                  />
                </div>
                <hr />
                <div className="row">
                  <div style={{ color: "white", marginLeft: "20px" }}>
                    <p>Copyright &copy; 2020 Mugs, Bottle & More</p>
                  </div>
                  <div
                    className="col-md-4 col-sm-4 text-md-right"
                    style={{ color: "white" }}
                  >
                    <a
                      href="mailto:akisanyamobolaji@gmail.com"
                      className="text"
                    >
                      Coding by Bolaji
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        );
    }
}
 
export default Footer;