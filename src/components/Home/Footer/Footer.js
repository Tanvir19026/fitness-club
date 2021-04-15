import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {
    return (
        <div className="row text-center text-light mt-5" style={{backgroundColor: 'black'}}>
            <div className="col-md-12 mt-5 mb-5">
            <h2 style={{color:'red'}}> Get Connected with Gym</h2>
            <ul>
            <a href=""><FontAwesomeIcon className="icon" style={{width:'50px',color:'white',fontSize:'20px'}} icon={faMapMarker} />Dhaka,Bangladesh</a>
            <br></br>
            <a href=""><FontAwesomeIcon className="icon" style={{width:'50px',color:'white',fontSize:'20px'}} icon={faPhone} />+8801765341047</a>  
                              
                        
            </ul>
           
            <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" style={{width:'100px'}} icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            <p>Tanvir Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                        </ul>
                      
            </div>
            
        </div>
    );
};

export default Footer;