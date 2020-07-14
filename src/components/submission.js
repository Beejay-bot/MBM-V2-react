import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const submissionMessage = () => {
    return (
      <div className="jumbotron">
        <h1 style={{ textAlign: "center" }}>Thank you for contacting us.</h1>
        <br />
        <h5 style={{ textAlign: "center" }}>
          We will reach out to you within "Two Working Days"
        </h5>
        <a href="/">
          <FontAwesomeIcon
            icon="arrow-alt-circle-left"
            style={{ fontSize: "50px" }}
          />
        </a>
      </div>
    );
}
 
export default submissionMessage;