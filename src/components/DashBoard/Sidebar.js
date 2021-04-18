import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    const [isAdmin,setisAdmin]=useState(false);
    useEffect(()=>{
    fetch('http://localhost:5000/isAdmin',{
    method:'POST',
    headers:{'content-type': 'application/json'},
    body: JSON.stringify({email:loggedInUser.email})

    })
    .then(res=> res.json())
    .then(data => setisAdmin(data))
    },[])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh",backgroundColor:'grey'}}>
          {isAdmin && <div>
           <ul className="list-unstyled">
            <li>
                <Link to="/manageinventory" className="text-light" style={{fontWeight:'600'}}>
                    <span>ManageService</span> 
                </Link>
            </li>
            <li>
                <Link to="/addproducts" className="text-light" style={{fontWeight:'600'}}>
                   <span>AddService</span> 
                </Link>
            </li>
            <li>
                <Link to="/admin" className="text-light" style={{fontWeight:'600'}}>
                 <span>Admin</span>
                </Link>
            </li>
            <li>
                <Link to="/orderlist" className="text-light" style={{fontWeight:'600'}}>
                 <span>OrderList</span>
                </Link>
            </li>
            </ul>
           </div>
}
           <ul>
            <li>
                <Link to="/specificOrder" className="text-light" style={{fontWeight:'600'}}>
                     <span>Your Order</span>
                </Link>
            </li>
            <li>
                <Link to="/addReview" className="text-light" style={{fontWeight:'600'}}>
                     <span>Add Review</span>
                </Link>
            </li>
            <li>
                <Link to="/OrderInfo/:name" className="text-light" style={{fontWeight:'600'}}>
                     <span>place Order</span>
                </Link>
            </li>
        </ul>
        
    </div>
    );
};

export default Sidebar;