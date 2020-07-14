import React, { Component } from 'react';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fullname:"",
            email : "",
         }
    }

    handlechange = (event) =>{
        const {name, value,} = event.target
        this.setState({ [name] : value })
    }

    render() { 
    const  label_styles= {
        color:"red",
        visibility: "hidden",
        fontFamily : "monospace"
    }

    const ContactValidation = () =>{
        let name = this.state.fullname
        let email = this.state.email
        let regx = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
        
        if (regx.test(email)) {

            document.getElementById("emailCorrector").innerHTML = "Valid"
            document.getElementById("emailCorrector").style.visibility = "visible"
            document.getElementById("emailCorrector").style.color = "green"

        }
        else if (regx.test(email) === false) {
            document.getElementById("emailCorrector").innerHTML = "Please enter a valid  E-mail"
            document.getElementById("emailCorrector").style.visibility = "visible"
            document.getElementById("emailCorrector").style.color = "red"
        }
        
        else if(name.trim() === "")
        {
            document.getElementById("form_styles2").style.border = "solid 3px red"
            document.getElementById("nameCorrector").style.visibility = "visible"
        }

        
    }
        return (
          <form
            name={this.props.formName}
            action="POST"
            data-netlify="true"
            className={this.props.className}
            onClick={ContactValidation}
            id={this.props.formWrapper}
            style={this.props.style}
          >
            <h3> {this.props.header}</h3>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                value={this.state.email}
                name="email"
                id={this.props.formId1}
                aria-describedby="emailHelpId"
                placeholder="Your e-mail"
                onChange={this.handlechange}
                required
              />
              <label id="emailCorrector" style={label_styles} for="email">
                Enter your e-mail
              </label>
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="fullname"
                id={this.props.formId2}
                aria-describedby="helpId"
                placeholder="Your name"
                value={this.state.fullname}
                onChange={this.handlechange}
                required
              />
              <label id="nameCorrector" style={label_styles} for="fullname">
                {" "}
                Enter your Full Name
              </label>
            </div>

            <div className="form-group">
              <label for="Message"></label>
              <textarea
                className="form-control mb2"
                name="message"
                id={this.props.formId3}
                placeholder="Your Message"
              required/>
            </div>
            <button type="submit" name="" id="" className={this.props.btnClass}>
              Submit
            </button>
          </form>
        );
    }
}
 
export default ContactForm;