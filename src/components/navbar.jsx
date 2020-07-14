import React from "react";
import $ from "jquery";

function NewText() {
    document.getElementById("brand_name").innerHTML = "Welcome"
    document.getElementById("brand_name").style.color = "white"
}

function defaultImage() {
  document.getElementById("brand_name").src = "img/MBM2.png";
  document.getElementById("brand_name").style.width = "10%";
  document.getElementById("brand_name").style.marginLeft = "10px"
}

class Navbar extends React.Component {
  componentDidMount() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#nav-bar").addClass("header-scrolled");
      } else {
        $("#nav-bar").removeClass("header-scrolled");
      }
    });

    if ($(window).scrollTop() > 100) {
      $("#nav-bar").addClass("header-scrolled");
    }
  }

  render() {
      const styles ={
          color:"lightgreen"
      }

      const dropDownStyles = {
          color:"lightgreen",
      }
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light " id="nav-bar">
          <span id="line-design"></span>
          <img
            src="img/MBM2.png"
            alt="Mugs,Bottle& More logo"
            width="10%"
            style={{ marginLeft: "10px" }}
            id="brand_name"
            onMouseOver={NewText}
            onMouseOut={defaultImage}
          />
          <p style={{fontSize:"small", marginLeft:"5px", fontFamily:"Gothic", color:"wheat"}}>
            Welcome to Mugs,Bottle & More.
          </p>

          <button
            type="button"
            className="navbar-toggler btn-danger" 
            data-toggle="collapse"
            data-target="#navbarCollapse"
            >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarCollapse"
          >
            <div className="navbar-nav text-center" id="navbar-content">
              <a href="/" className="nav-item link-items nav-link active" style={styles}>
                Home
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#end"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  style={styles}
                >
                  Products
                </a>
                <div className="dropdown-menu">
                  <a
                    href="/mug"
                    className="dropdown-item"
                    id="dropdown-items"
                    style={dropDownStyles}
                  >
                    Mugs
                  </a>
                  <a
                    href="/bottle"
                    className="dropdown-item"
                    id="dropdown-items"
                    style={dropDownStyles}
                  >
                    Bottles
                  </a>
                </div>
              </div>
              <a href="/about" className="nav-item nav-link" style={styles}>
                About
              </a>
              <a href="/contact" className="nav-item nav-link" style={styles}>
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
