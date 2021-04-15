import React from 'react';
import homebg from '../../../images/home.jpg';
import './Mainheader.css'

const Mainheader = () => {
    return (
        <div className="row header-container" style={{height: '500px',backgroundColor:'black'}}>
         <div className="col-md-5 mt-5 d-flex align-items-center" >
         <h1 className="text-light ml-5" >It's <span style={{color: 'red'}}>Gym</span> Time.Let's Go <br/>We Are Ready To <span style={{color: 'red'}}>Fit You</span></h1>
         </div>
         <div className="col-md-7 d-flex align-items-center" >
             <img style={{width:'120%'}}src={homebg} alt=""/>
         </div>
        </div>
    );
};

export default Mainheader;