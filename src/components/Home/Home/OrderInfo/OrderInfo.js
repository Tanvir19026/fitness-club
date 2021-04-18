import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../../App';
import { useForm } from "react-hook-form";
import ProcessPayment from '../../../ProcessPayments/ProcessPayments';

const OrderInfo = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [shipingData,setShippingData]=useState(null);
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {name}=useParams();
    const handlepaymentSuccess =paymentId=>{
     
    };
    const onSubmit = (data) => {
       
        setShippingData(data)
          const orderDetails = {
             
            ...loggedInUser,
            Service:name,
            Fee:200,
            shipment: data,
            orderTime: new Date(),
          };
          fetch('http://localhost:5000/addService',{
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(orderDetails)
          })
         .then(res => res.json())
         .then( success=>{
           alert('pay first')
         })
        };
     
     
    return (
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="text-center p-5" >
             <div style={{border: '1px solid red',backgroundColor:'grey',color:'white'}}>
            <h3>Your Training Course  :{name}</h3>
             <h4>Training Fees:$200/Month</h4>
             </div>
             <p className="mr-5">Please fill up the form : </p>
          <input defaultValue="Name" {...register("Name")} style={{width:'60%'}} />
          {errors.exampleRequired && <span>This field is required</span>}
           <br/>
           <input defaultValue="Age" {...register("Age")}  style={{width:'60%'}} />
          {errors.exampleRequired && <span>This field is required</span>}
           <br/>
           <input defaultValue="Gender" {...register("Gender")}  style={{width:'60%'}} />
          {errors.exampleRequired && <span>This field is required</span>}
           <br/>
          <input defaultValue="Email" {...register("Email")}  style={{width:'60%'}} />
          {errors.exampleRequired && <span>This field is required</span>}
          <br/>
          <input defaultValue="Mobile" {...register("Mobile")} style={{width:'60%'}} />
          {errors.exampleRequired && <span>This field is required</span>}
          <br/><input defaultValue="Address" {...register("Address")} style={{width:'60%'}} />
          {errors.exampleRequired && <span>This field is required</span>}
          <br/>
          
         {errors.gender && <span className="text-danger">This field is required</span>}
          <input className="text-center  btn-brand" type="submit" style={{width:'30%',backgroundColor:'blue',color:'white',fontWeight:'600'}} />

          
            
       
        </form>
        <div  className="col-md-6">
          <h2>Please pay Here.</h2>
          <ProcessPayment  handlePayment={handlepaymentSuccess}></ProcessPayment>
      </div>
            
        </div>
    );
};

export default OrderInfo;