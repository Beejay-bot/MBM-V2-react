import React  from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Carousel = (props) => {
    const description_styles = {
        fontFamily: "cursive", 
        color:"black",
        display: "block"
    }

    const img_styles={
        height:"400px",
        width: "500px"
    }

    const clientImg = {
        width: "10%"
    }

    const title_styles={
        color:"pink",
        fontFamily:"cursive",
    }
    
    return (
      <div id={props.id} className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target={props.idTarget}
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target={props.idTarget} data-slide-to="1"></li>
          <li data-target={props.idTarget} data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
          <div className="carousel-background">
          <img
              src={props.imgurl}
              alt="First Slide"
              {...(props.idTarget === "#mycarousel" ? img_styles : clientImg)}
              className={props.imgID}
              style={{opacity:0.8}}
              />
              </div>
    
            <h3 style={title_styles}>{props.name1}</h3>
            <h5 style={title_styles}>{props.workTitle1}</h5>
            <p style={description_styles}>
              <FontAwesomeIcon icon="quote-left" />
              {props.description1}
              <FontAwesomeIcon icon="quote-right" />
            </p>
          </div>
          <div className="carousel-item">
            <img
              src={props.imgurl2}
              {...(props.idTarget === "#mycarousel" ? img_styles : clientImg)}
              
              className={props.imgID}
              alt="Second Slide"
            />
            <h3 style={title_styles}>{props.name2}</h3>
            <h5 style={title_styles}>{props.workTitle2}</h5>
            <p style={description_styles}>
              
                <FontAwesomeIcon icon="quote-left" />
                {props.description2}
                <FontAwesomeIcon icon="quote-right" />
            
            </p>
          </div>
          <div className="carousel-item">
            <img
              src={props.imgurl3}
              {...(props.idTarget === "#mycarousel" ? img_styles : clientImg)}
              
              className={props.imgID}
              alt="Third Slide"
            />
            <h3 style={title_styles}>{props.name3}</h3>
            <h5 style={title_styles}>{props.workTitle3}</h5>
            <p style={description_styles}>
              <FontAwesomeIcon icon="quote-left" />
              {props.description3}
              <FontAwesomeIcon icon="quote-right" />
            </p>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href={props.idTarget}
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon bg-dark"></span>
        </a>
        <a
          className="carousel-control-next"
          href={props.idTarget}
          data-slide="next"
        >
          <span className="carousel-control-next-icon bg-dark"></span>
        </a>
      </div>
    );
}

export const CarouselTwo = (props) => {
  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  return (
    <div>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src={props.img1} style={{ width: "100%" }} alt="" />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src={props.img2} style={{ width: "100%" }} alt="" />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src={props.img3} style={{ width: "100%" }} alt="" />
          <div className="text">Caption Three</div>
        </div>

        <a className="prev" onClick={plusSlides(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={plusSlides(1)}>
          &#10095;
        </a>
      </div>

      <br />

      <div style={{ textAlign: "center" }}>
        <span className="dot" onclick={currentSlide(1)}></span>
        <span className="dot" onclick={currentSlide(2)}></span>
        <span className="dot" onclick={currentSlide(3)}></span>
      </div>
    </div>
  );
}

 
export default Carousel;