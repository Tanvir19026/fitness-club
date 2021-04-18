import React, { useContext } from 'react';
import { UserContext } from '../../App';

const MainDashboard = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    const onSubmit = data => {
       
        const  eventData={
          email:data.email,
          Name:data.Name,
         
        };
        const url=`http://localhost:5000/adminMonitor`;
        
       fetch(url,{
        method: 'POST',
        headers: {'content-Type':'application/json'},
        body: JSON.stringify({eventData,email:loggedInUser.email})
   
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

export default MainDashboard;