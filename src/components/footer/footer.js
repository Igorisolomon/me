import React from 'react';
import './Footer.css'
import Facebook from '../../assets/images/fb.svg';
import Twitter from '../../assets/images/tw.svg';
import Linkedin from '../../assets/images/ln.svg';
import Github from '../../assets/images/gh.svg';

const Footer = ()=>
    <div id="contact" className="footer text-center">
        <h1>{"< Contact Me />"}</h1>
        <a><img className="social" src={Linkedin} alt="linkedin"/></a>
        <a><img className="social" src={Twitter} alt="twitter"/></a>
        <a><img className="social" src={Github} alt="github"/></a>
        <a><img className="social" src={Facebook} alt="facebook"/></a>
        <div className="copyright">&copy; 2018, Solomon Igori</div>
    </div>


export default Footer;