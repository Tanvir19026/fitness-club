import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';


const AddProducts = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setloggedInUser] = useContext(UserContext);

    const [imageUrl,setImageUrl]=useState(null);
    const onSubmit = data => {
    const newUser={...loggedInUser};
     const  eventData={
       name:data.Name,
       imageUrl:imageUrl,
       price:data.fee,
       email:loggedInUser.email
     };
     const url=`https://floating-headland-81082.herokuapp.com/addEvent`;
     console.log(eventData);
    fetch(url,{
     method: 'POST',
     headers: {'content-Type':'application/json'},
     body: JSON.stringify(eventData)

    })
    .then(res=> console.log('response success',res))
    


    };
     const handleImageUpload=(event)=>{
         console.log(event.target.files[0]);
         const imageData=new FormData();
         
         imageData.set('key','f2b298920a0d9c55d28c541bcd520dcb');
         imageData.append('image',event.target.files[0]);
          
         axios.post('https://api.imgbb.com/1/upload', 
           imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

     }
     const styleManageproduct={fontSize:'30px',margin:'20px',backgroundColor:'black',textDecoration:'none'}
    return (
       
      <div>
                  
                  <h1 style={{marginTop:'100px'}}>Add Product</h1>
           <form onSubmit={handleSubmit(onSubmit)}>
           <input defaultValue="Name" {...register("Name")} />
          {errors.exampleRequired && <span>This field is required</span>}
           <br/>
           <input defaultValue="fee" {...register("fee")} />
          {errors.exampleRequired && <span>This field is required</span>}
           <br/>
           
           <input name="exampleRequired" type="file" onChange={handleImageUpload}/>
      <br></br>
         

      <input style={{backgroundColor:'grey',color:'black',padding:'5px 10px',borderRadius:'10px'}}  type="submit" />
          
    </form>
        </div>
    );
};

export default AddProducts;














