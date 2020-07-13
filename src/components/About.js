import React from "react";
import Navbar from './navbar'
import AdBtn from './adBtn'
import Footer from './footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function About() {
  const styles = {
    marginLeft: '10%', 
    color: "pink", 
    fontSize: "20px" 
  }
  return (
    <div className="bg-light">
      <Navbar />
      <AdBtn />
      <hr />
      <hr style={{ alignItems: "center", width: "80%" }} />
      <hr style={{ alignItems: "center", width: "50%" }} />
      <div className="container-fluid  mug-header">
        <h1>About us</h1>
      </div>
      <hr style={{ alignItems: "center", width: "20%" }} />
      <div className="container-fluid">
        <h4
          style={{
            marginLeft: "10%",
            fontSize: "40px",
            color: "black",
            fontFamily: "monospace",
          }}
        >
          Mugs, Bottles & More
        </h4>
        <br />
        <h4 style={styles}>
          <FontAwesomeIcon icon="stop-circle" />
          Your One-Stop Site for Mug and Bottles
        </h4>
        <br />
        <h5 style={styles}>
          <FontAwesomeIcon icon="print" />
          Classy Designs, Affordable Price, Top Notch Packaging and Fast
          Delivery
        </h5>
        <br />
        <h6 style={styles}>
          <FontAwesomeIcon icon="motorcycle" />
          48 hours Delivery
        </h6>
      </div>
      <br />
      <div className="container-fluid col-10" style={{ textAlign: "center" }}>
        <p style={{ opacity: 0.6 }}>
          You are most welcome to Mug, Bottle & More - your one stop solution
          for all sought of printing of mugs and bottles. Our printing services
          will help you in achieving optimal customization and design of your
          mugs and bottles. We use latest technology and machines and can print
          anything form of cups, mugs, bottles and even do branding for
          business. We have been providing printing services in Nigeria to
          leading corporates, business houses and start-up businesses.
        </p>
      </div>
      <div className="container" style={{ textAlign: "center" }}>
        <br /> <br />
        <div className="container">
          <h2 style={{ color: "black", fontFamily: "monospace" }}>
            <p>
              We are reliable and second to none in Nigeria. Home of print
              creativity.
            </p>
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
