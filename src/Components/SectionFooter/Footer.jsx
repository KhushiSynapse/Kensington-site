import React from "react"
import at from "../../assets/at.svg"
import Logo from "../../assets/logo2.svg"
import Linkedin from"../../assets/linkedin.svg"
import  "./footer.css"
 const Footer=()=>{
    return(
        <footer className="footer">
            <div className="content-box1">
                <div>
            <div className="content-box2">
                <img src={Logo} alt="logo"/>
                <div className="container1">
                    <p className="text1">© 2025 KI Search. All Rights Reserved.</p>
                    <p className="text2">Site by Clever Design</p>
                </div>
                </div>
                </div>

                <div className="right-col">
                    <div className="links">
                        <a href="#policy" >Privacy Policy</a>
                        <a href="#terms">Terms of Use</a>
                </div>
                <div className="icon">
                    <button ><img src={Linkedin} alt="linkedin"/></button>
                </div>
                <div className="button">
                    <button><p>Contact</p><img src={at} alt="@"/></button>
                </div>
                </div>
                </div>
        </footer>
    )
 }

 export default Footer;