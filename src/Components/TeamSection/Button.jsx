import React from "react"
import arrow from "../../assets/arrow.svg"
import './button.css'
const Button=()=>{
    return(
        <div className="view">
            <button><p>View All</p><img src={arrow} alt="->"/></button>
        </div>
    )
}

export default Button;