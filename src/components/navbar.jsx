import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function navNewText()
{
    document.getElementsByClassName("brand_name").innerHTML = "Welcome"
    document.getElementsByClassName("brand_name").style = {color:"blue"}
}

function defaultImage()
{
    document.getElementsByClassName("brand_name").src = "img/MBM2.png"
    document.getElementsByClassName("brand_name").style.height = "70px"
}


const Navbar = () => {
    return ( 
        <div>
            <nav className="nav justify-content-center bg-dark" style={{fontSize:"small"}}>
                <p className="nav-item nav-link active" style={{color:"white"}}>
                    Contact us: 234 2941 5094
                </p>
                <span style={{color:"white", marginTop:"8px"}}>|</span>
                <p><a href="mailto:mugsbottlesnmore@gmail.com" className="nav-item nav-link">mugsbottlesnmore@gmail.com</a></p>
                <span style={{ color: "white", marginTop: "8px" }}>|</span>
                <p>
                    <a href="https://www.instagram.com/mugsbottlesnmore/?hl=en" target="blank">
                        <FontAwesomeIcon icon={['fab', 'instagram']} style={{fontSize:"large", marginTop:"10px"}} /> 
                    
                    </a>
                </p>
            </nav>
            
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <img src="img/MBM2.png" className="navbar-brand brand_name" height="70px" alt="Mug,Bottle& More logo"
                onMouseOver={navNewText} 
                onMouseOut={defaultImage}/>

                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end nav-pills" id="navbarCollapse">
                <div className="navbar-nav text-center">
                    <a href="/" className="nav-item nav-link active">Home</a>
                    <div className="nav-item dropdown">
                        <a href="#end" className="nav-link dropdown-toggle" data-toggle="dropdown">Products</a>
                            <div className="dropdown-menu">
                                <a href="/mug" className="dropdown-item">Mugs</a>
                                <a href="/bottle" className="dropdown-item">Bottles</a>
                            </div>
                    </div>
                        <a href="/about" className="nav-item nav-link">About</a>
                        <a href="/contact" className="nav-item nav-link">Contact</a>
                </div>
                </div>
            </nav>

        </div>
     );
}
 
export default Navbar;