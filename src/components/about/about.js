import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'

const About = ()=>{
    return(
        <div className="about" id="about">
            <div className="header">About Me</div>
            <div className="last">I am a guy who believes <span className="emphasis">Education</span> is the best way to <span className="emphasis">Change</span> the world for good and <span className="emphasis">Startup</span> holds the future of any countries <span className="emphasis">economy</span></div>
        </div>
    )
}

export default About;