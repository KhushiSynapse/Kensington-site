import React from "react"
import './Navbar.css';

import Logo from '../../assets/logo.svg'
const Navbar=()=>{
    return(
        <nav className="navbar"> 
        <div className="contentBox">
            <div className="left_link">
                <a href="#about">About</a>
                <a href="#team">Team</a>
            </div>

            <div className="logo">
          <img src={Logo} alt="Company Logo" />
        </div>

            <div className="right_link">
                <a href="#inquiry">Private Enquiry</a>
                <a href="#industries">Industries</a>
            </div>
            
        </div>
        </nav>
    )
}
export default Navbar;