import React from 'react';
import Navbar from './navbar'
import AdBtn from './adBtn'
import ContactForm from './contactForm'
import  Footer from './footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Contact = () => {
    const icons ={
        color: "blue",
        fontSize: "20px"
    }

    const socialMediaIcons={
        fontSize: "large", 
        marginTop: "10px",
}
    
    return (
      <div className="bg-light ">
        <AdBtn />
        <Navbar />
        <hr />
        <hr style={{ alignItems: "center", width: "80%" }} />
        <hr style={{ alignItems: "center", width: "50%" }} />
        <div className="container-fluid  mug-header">
          <h1>Contact us.</h1>
        </div>
        <br /> <br />
        <div className="container ">
          <div className="row ">
            <div className="col-6 ">
              <h2 className="text-strong margin-bottom-30" id="con_info">
                Information
              </h2>
              <br />
              <div>
                <h4 className="mb ml-8">
                  <FontAwesomeIcon icon="paper-plane" style={icons} />
                  <span className="m-3 mb-0 text-strong">E-mail</span>
                </h4>
                <p className="ml-5 ">
                  <a href="mailto:mugsbottlesnmore@gmail.com" target="blank">
                    mugsbottlesnmore@gmail.com
                  </a>
                  <br />
                  <a href="mailto:tairatadeogun@gmail.com" target="blank">
                    tairatadeogun@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <h4>
                  <FontAwesomeIcon icon="info-circle" style={icons} />
                  <span className="m-3"> Social Media</span>
                </h4>
                <p className="ml-5" id="social-media-icons">
                  <FontAwesomeIcon
                    icon={["fab", "instagram"]}
                    styles={socialMediaIcons}
                  />
                  <a
                    href="https://www.instagram.com/mugsbottlesnmore/?hl=en"
                    target="blank"
                  >
                    Instagram
                  </a>
                  <br />
                  <FontAwesomeIcon
                    icon={["fab", "whatsapp"]}
                    style={socialMediaIcons}
                  />
                  <a href="#whatsapp" target="blank">
                    {" "}
                    Whatsapp
                  </a>
                </p>
              </div>
              <div>
                <h4>
                  <FontAwesomeIcon icon="phone-alt" style={icons} />
                  <span className="m-3">Phone Numbers</span>
                </h4>
                <p className="ml-5" style={{ opacity: 0.5 }}>
                  234 2941 5094
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <h2 className="text-storng margin-bottom-30" id="con_info">
                Send us a Message
              </h2>

              <ContactForm btnClass="btn btn-block btn-primary" />
            </div>
          </div>
        </div>
        <br />
        <Footer />
      </div>
    );
}
 
export default Contact;