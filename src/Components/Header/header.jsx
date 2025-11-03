import React from "react"
import './header.css'
import Video from '../../assets/bgvideo.mp4'
import Navbar from '../Navbar/Navbar';
const header =()=>{
    return(
        <header className="header" >
            <Navbar/>
            <div className="bg">
                <video autoPlay loop muted playsInline>
                    <source src={Video} type="video/mp4"/>
                </video>
            </div>
            <div className="text_button">
                <p className="text1">Advancing<span> Organizations</span>  <br/>Through <span>Leadership</span></p>
                 <p className="text2">Your Partner in Executive Search</p>

            </div>
        </header>
    )

}
export default header;