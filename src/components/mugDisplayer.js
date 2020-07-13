import React from "react";

const MugDisplayer = (props) => {
    let width = 100
    let difference = 2;
    let intervaID = 0
    // document.getElementById(props.imgclass).style.width = width

const newImage = () => {
  document.getElementById(props.individual_ID).src = props.imgurl;
};

const defaultImage = () => {
  document.getElementById(props.individual_ID).src = props.imgurl2;
};


    let increase = () =>
    {
      newImage()
      clearInterval(intervaID)
      intervaID= setInterval(zoomIn, 20)
    }

    let decrease = () =>
    {
      defaultImage()
      clearInterval(intervaID)
      intervaID=setInterval(zoomOut, 20)
    }

    let zoomIn = () =>
    {
      if (width < 200)
      {
        width= width + difference
        // document.getElementById(props.imgclass).style.width = width
      }
      else{
        clearInterval(intervaID)
      }
    }
    
    let zoomOut = () => 
    {
      if(width > 100)
      {
        width =width - difference
        // document.getElementById(props.imgclass).style.width = width
      }
      else{
        clearInterval(intervaID)
      }
    }
  
  

  return (
    <div className={props.className} id={props.id}>
      <div className="inner">
        <img
          onMouseOver={increase}
          onMouseOut={decrease}
          className={props.imgclass}
          style={{ marginTop: "30px" }}
          src={props.img}
          id={props.individual_ID}
          alt=""
          width="100%"
        />
      </div>
      <br />
      <h6 className="description"> {props.description}</h6>
      <br />
      <p className="description">{props.text}</p>
      <button style={{ cursor: "not-allowed" }}>
        <a href="/contact" target="blank">
          <span style={{ color: "white", cursor: "not-allowed" }}>
            Order now &raquo;
          </span>
        </a>
      </button>
    </div>
  );
};

export default MugDisplayer;
