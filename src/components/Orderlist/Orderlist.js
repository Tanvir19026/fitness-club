import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orderlist = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    console.log(loggedInUser)
    const [orders,setorders]=useState([]);
    useEffect(()=>{
     fetch('https://floating-headland-81082.herokuapp.com/orders')
     .then(res=> res.json())
     .then(data => setorders(data))
    },[])
    return (
        <div>
            <h2 className="text-primary text-center"> Total Order : {orders.length}</h2>
            {
                orders.map(order => <li  style={{border:'1px solid red',margin:'15px',padding:'15px',boxShadow:'5px 5px 10px black',backgroundColor:'grey',color:'white'}}><p>Email:{order.email}</p><p>Service Name:{order.Service}</p><p>Fee:${order.Fee}/Month</p><p>Status:Recived</p></li>)
            }
        </div>
    );
};

export default Orderlist;