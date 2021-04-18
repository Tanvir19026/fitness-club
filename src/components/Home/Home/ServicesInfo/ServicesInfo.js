import React, { useEffect, useState } from "react";
import Packages from "../../Packages/Packages";


const ServicesInfo = () => {
  const [services,setServices]=useState([]);
  useEffect(()=>{
    fetch('https://floating-headland-81082.herokuapp.com/events')
    .then(res => res.json())
    .then(data => setServices(data))
  })
  return (
    <div className="container mt-5 ">
      <h1 className="text-center">Our Packages</h1>
      <div className="row mt-4  ">
        {services.map((service) => (
          <Packages service={service} />
        ))}
        

      </div>
    </div>
  );
};

export default ServicesInfo;
