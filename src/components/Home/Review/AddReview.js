
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';



const AddReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
 

    const [imageUrl,setImageUrl]=useState(null);
    const onSubmit = data => {
   
     const  eventData={
       name:data.Name,
       imageUrl:imageUrl,
       Review:data.comment,
       email:data.email
       

     };
     const url=`http://localhost:5000/addReview`;
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
       
      <div style={{marginLeft:'25px',backgroundColor:'cyan',color:'grey'}}> 
                  
                  <h1 style={{marginTop:'100px'}}>Add Review</h1>
           <form onSubmit={handleSubmit(onSubmit)}>

           <input defaultValue="Name" {...register("Name")} />
          {errors.exampleRequired && <span>This field is required</span>}
         
           <br/><br></br><input style={{width:'80%',padding:'2%'}} defaultValue="comment" {...register("comment")} />
          {errors.exampleRequired && <span>This field is required</span>}

           <br/><br></br><input  defaultValue="email" {...register("email")} />
          {errors.exampleRequired && <span>This field is required</span>}
           <br></br>
           <br></br>
           
         
           <input name="exampleRequired" type="file" onChange={handleImageUpload}/>
      <br></br>  <br></br>
         
    
      <input  style={{borderRadius:'3px', padding:'5px 5px',backgroundColor:'black',color:'white'}}  type="submit"
        />
        
          
    </form>
        </div>
    );
};

export default AddReview;