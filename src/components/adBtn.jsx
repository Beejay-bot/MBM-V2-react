import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const AdBtn = () => {
    return (
      <div>
        <a  className="hide-s contact-btn" href="contact">
          <button className="btn btn-danger" data-toggle="modal" data-target="#myModal">
            <span className="badge badge-light"> SEND A MESSAGE</span>
          </button></a>
          
          <div id="myModal" className="modal fade" role="dialog">
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" classNames="close" data-dismiss="modal">
                    &times;
                  </button>
                  <h4 className="modal-title">AD</h4>
                </div>
                <div
                  className="modal-body bg-success"
                  style={{ fontFamily: "monospace" }}
                >
                  <img
                    style={{ alignContent: "center" }}
                    src="img/Tee_pearls.jpg"
                    alt="Tee_pearls Logo"
                    width="100%"
                  />
                  <p style={{ textAlign: "center", color: "whitesmoke" }}>
                    Do you need an event planner for that dream event of yours?
                  </p>
                  <p style={{ textAlign: "center", color: "whitesmoke" }}>
                    Do you want your event to be Organized, Classy and Top
                    Notch?
                  </p>
                  <h4 style={{ fontFamily: "cursive", color: "whitesmoke" }}>
                    Then contact Tee pearls now!!!!
                  </h4>
                  <ul>
                    <li style={{ color: "whitesmoke" }}>
                      <FontAwesomeIcon icon="link" />
                      <a
                        href="https://teepearls-events.business.site/"
                        target="blank"
                      >
                        https://teepearls-events.business.site/
                      </a>
                    </li>
                    <li style={{ color: "whitesmoke" }}>
                      <FontAwesomeIcon icon="envelope" />
                      <a href="mailto:@gmail.com">teepearls@gmail.com</a>
                    </li>
                    <li style={{ color: "whitesmoke" }}>
                      <FontAwesomeIcon icon="phone" />
                      234 2941 5094
                    </li>
                  </ul>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
    
      </div>
    );
}
 
export default AdBtn;