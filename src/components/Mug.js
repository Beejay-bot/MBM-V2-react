import React from "react";
import Navbar from "./navbar";
import AdBtn from "./adBtn";
import Footer from "./footer";
import MugDisplayer from "./mugDisplayer";

const Mug = () => {
  return (
    <div>
      <AdBtn />
      <Navbar />
      <div className="container-fluid  mug-header">
        <h1>Our products gallery</h1>
      </div>
      <hr style={{ alignItems: "center", width: "50%" }} />
      <div className="row">
        <MugDisplayer
          className="col-md-3 "
          imgclass="zoom"
          img="img/productsGallery/proposal_mug1.png"
          individual_ID="mug1"
          description="Customized Mug"
          text="Who says popping the question should be boring?"
          imgurl="img/productsGallery/proposal_mug2.png"
          imgurl2="img/productsGallery/proposal_mug1.png"
        />
        <br />
        <br />
        <MugDisplayer
          className="col-md-3 "
          imgclass="zoom"
          img="img/productsGallery/magic_cup1.jpg"
          individual_ID="mug2"
          description="Magic cup"
          text="Available in both 11oz and 15oz at affordable price."
          imgurl="img/productsGallery/magic_cup2.jpg"
          imgurl2="img/productsGallery/magic_cup1.jpg"
        />
        <br />
        <br />
        <MugDisplayer
          className="col-md-3 "
          imgclass="zoom"
          img="img/productsGallery/mr_right.jpg"
          individual_ID="mug3"
          description="Customized Mugs for couples."
          text="The perfect Cup tea for the MR & MRS"
          imgurl="img/productsGallery/mr&mrs.jpg"
          imgurl2="img/productsGallery/mr_right.jpg"
        />
      </div>
      <hr style={{ alignItems: "center", width: "80%" }} />
      <br />
      <hr style={{ alignItems: "center", width: "80%" }} />
      <div className="row">
        <MugDisplayer
          className="col-md-3 "
          imgclass="zoom"
          img="img/productsGallery/mug3.png"
          individual_ID="mug4"
          description="A father's day mug design."
          text="A perfect Father's day gift for that lovely Dad "
          imgurl="img/productsGallery/mug2.png"
          imgurl2="img/productsGallery/mug3.png"
        />
        <br />
        <br />
        <MugDisplayer
          className="col-md-3 "
          imgclass="zoom"
          img="img/productsGallery/halima.png"
          individual_ID="mug5"
          description="Customized Mug"
          text="Detailed, clean and classy design is our core essence"
          imgurl="img/productsGallery/jaycee.png"
          imgurl2="img/productsGallery/halima.png"
        />
        <br />
        <br />
        <MugDisplayer
          className="col-md-3 "
          imgclass="zoom"
          img="img/productsGallery/mugStripes1.png"
          individual_ID="mug6"
          description="Customized Mug"
          text="Here is another design that is simple yet beautiful."
          imgurl="img/productsGallery/mugStripes2.png"
          imgurl2="img/productsGallery/mugStripes1.png"
        />
      </div>

      <hr style={{ alignItems: "center", width: "80%" }} />
      <br />
      <hr style={{ alignItems: "center", width: "80%" }} />
      <div className="row">
        <MugDisplayer
          className="col-md-3 "
          imgclass="zoom"
          img="img/productsGallery/stuck1.png"
          individual_ID="mug7"
          description="Custom made Mugs."
          text="We love how this design turned out. We deliver with excellence."
          imgurl="img/productsGallery/stuck2.png"
          imgurl2="img/productsGallery/stuck1.png"
        />
        <br />
        <br />
        <MugDisplayer
          className="col-md-3 "
          imgclass="zoom"
          img="img/productsGallery/waterMug.png"
          individual_ID="mug8"
          description="Customized Mug"
          text="Water colour designs are sweet and we are totally in love with this design."
          imgurl="img/productsGallery/waterMug2.png"
          imgurl2="img/productsGallery/waterMug.png"
        />
        <br />
        <br />
        <MugDisplayer
          className="col-md-3 "
          imgclass="zoom"
          img="img/productsGallery/photHolic.png"
          individual_ID="mug9"
          description="Customized Mug"
          text="Where are all our Photographers and MonoChrome lovers?"
          imgurl="img/productsGallery/Hustle.png"
          imgurl2="img/productsGallery/photHolic.png"
        />
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Mug;
