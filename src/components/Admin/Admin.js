import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Admin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setloggedInUser] = useContext(UserContext);
    const onSubmit = data => {
       
         const  eventData={
           email:data.email,
           Name:data.Name,
          
         };
         const url=`https://floating-headland-81082.herokuapp.com/addAdmin`;
         
        fetch(url,{
         method: 'POST',
         headers: {'content-Type':'application/json'},
         body: JSON.stringify(eventData)
    
        })
        .then(res=> console.log('response success',res))
        
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
           <input defaultValue="email" {...register("email")} />
          {errors.exampleRequired && <span>This field is required</span>}
           <br/>
           <input defaultValue="Name" {...register("Name")} />
          {errors.exampleRequired && <span>This field is required</span>}
           <br/>
         

      <input style={{backgroundColor:'cyan',color:'black',padding:'5px 5px',borderRadius:'5px'}}  type="submit" />
          
    </form>
        </div>
    );
};

export default Admin;