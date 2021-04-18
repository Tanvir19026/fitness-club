
import React, { useContext, useEffect, useState } from "react";
import {Button} from 'react-bootstrap'
import { useParams } from "react-router";


const ManageService = () => {
    const [products,setproducts]=useState([]);
    
    const deleteProduct=(id)=>{

      fetch(`http://localhost:5000/delete/${id}`,{
        method: 'DELETE',

      })
      .then(res=> res.json())
      .then(result =>{
        if(result)
        {
          alert('delete ok')
        
        }
      })
      console.log(id);
    }

    useEffect(()=>{
      const url=`http://localhost:5000/events`
      fetch(url)
      .then(res=> res.json())
      .then(data=>setproducts(data));
      
      
    },[]);

    

    
  return (
    <div>
        
      {
                    products.map(product=><h4><p>Service Name:{product.name}</p><p>Price :${product.price}/Month </p>
                    <Button variant="primary" onClick={()=> deleteProduct(product._id)}>Remove</Button></h4>)
     }

    </div>
  );
};

export default ManageService;