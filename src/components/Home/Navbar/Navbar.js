import React, { useContext } from "react";
import {Link} from 'react-router-dom'
import { UserContext } from "../../../App";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser]=useContext(UserContext)
  return (
      <div className="d-flex mr-5"  style={{backgroundColor:'black',width:'100%'}}>
      <h2 style={{color:'grey',marginLeft:'20px',fontWeight:'600',marginTop:'5px'}}>Fitness<span style={{color:'red'}}>Club</span></h2>


          <ul className="d-flex justify-content-between" style={{marginLeft:'250px'}}>
           
                <Link to="/" className="text-light" style={{fontWeight:'600',padding:'10px',textDecoration:'none',marginLeft:'20px'}}>
                     <span>Home</span>
                </Link>
            
           
                <Link to="/addReview" className="text-light"  style={{fontWeight:'600',padding:'10px',textDecoration:'none',marginLeft:'20px'}}>
                     <span>Add Review</span>
                </Link>
           
          
                <Link to="/DashBoard" className="text-light"  style={{fontWeight:'600',padding:'10px',textDecoration:'none',marginLeft:'20px'}}>
                     <span>DashBoard</span>
                </Link>
           
         
                <Link to="/login" className="text-light"  style={{fontWeight:'600',padding:'10px',textDecoration:'none',marginLeft:'20px'}}>
                     <span>login</span>
                </Link>
           
          
                <Link to="/login" className="text-primary"  style={{fontWeight:'600',padding:'10px',textDecoration:'none',marginLeft:'20px'}}>
                     <span>{loggedInUser.name}</span>
                </Link>
           

        </ul>










        
          
          
      
    </div>
  );
};

export default Navbar;
