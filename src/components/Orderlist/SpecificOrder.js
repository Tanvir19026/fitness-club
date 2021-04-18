import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from "../../App";

const SpecificOrder = () => {
  
   const [loggedInUser, setLoggedInUser]=useContext(UserContext)
    const [orders,setorders]=useState([]);
   
    
    useEffect(()=>{
     fetch('http://localhost:5000/ordersOne?email=' +loggedInUser.email)
     .then(res=> res.json())
     .then(data => setorders(data))
    },[])
    return (
        <div>
             <h1 className="text-primary text-center" >Order : {orders.length}</h1>

            <h2 className="text-danger text-center">Name:{loggedInUser.name}</h2>
         <div >
            {
                orders.map(order => <li style={{border:'1px solid red',margin:'10px',padding:'15px',boxShadow:'20px 20px 40px grey',backgroundColor:'black',color:'white'}}><p>Email:{order.email}</p><p>Service Name:{order.Service}</p><p>Fee:{order.Fee}/Month</p><p>Status:Recived</p></li>)
            }
            </div>
       
        </div>
    );
};

export default SpecificOrder;