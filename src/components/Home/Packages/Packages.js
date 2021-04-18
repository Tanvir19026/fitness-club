import React from 'react';
import {Card,Button} from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Package.css';



const Packages = (props) => {
    const{name,price,imageUrl}=props.service;

    const history=useHistory();

    const handleClick=(name)=>{
     const url=`/OrderInfo/${name}`;
     history.push(url);
    }
   
   
   
    return (
        <div className="col-md-3 d-flex justify-content-between mb-5 text-center">
   

<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={imageUrl} />
<Card.Body>
  <Card.Title style={{color: 'red'}}>{name}</Card.Title>
  <Card.Text>
   <p style={{color:'black',fontWeight:'500'}}>Fee:${price}/Month</p>
  </Card.Text>
  <Button variant="primary" onClick={()=>handleClick(name)} >Join Now</Button>

  
</Card.Body>
</Card> 
  
      

      
    

        </div>
    );
};

export default Packages;







