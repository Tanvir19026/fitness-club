import React from 'react';
import {Card,Button} from 'react-bootstrap';

const Packages = (props) => {
    const{title,price,image}=props.data;
    return (
        <div className="col-md-3 d-flex justify-content-between mb-5 text-center">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title style={{color: 'red'}}>{title}</Card.Title>
    <Card.Text>
     <p style={{color:'black',fontWeight:'500'}}>Fee:${price}/Month</p>
    </Card.Text>
    <Button variant="primary">Join Now</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default Packages;