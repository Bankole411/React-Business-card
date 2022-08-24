import React from "react"

export default function Info(){
    return(
        <div className="info-section">
            <img className="image-placeholder" src="./images/IMG_0169.jpg"></img>
            <h3 className="info-name">Bankole Oluwatobiloba</h3>
            <h5 className="info-skill">Front-End Developer</h5>
            <h5 className="info-website">bankole.website</h5>
            
            <div className="info-boxes">
                <div className="email-box"><p>Email</p></div>
                <div className="linkedin-box"><p>LinkedIn</p></div>
            </div>
        </div>
    )
}