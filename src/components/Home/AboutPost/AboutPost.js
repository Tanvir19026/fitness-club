import React from 'react';
import {Card} from 'react-bootstrap';

const AboutPost = (props) => {
    const {title, description,image} = props.about;
    return (
        <Card style={{ width: '18rem',color:'blue'}}>
  <Card.Img variant="top" src={image} />
  <Card.Body style={{color:'grey',backgroundColor:'black'}}>
    <Card.Title style={{color:'green',fontWeight:'600'}}>{title}</Card.Title>
    <Card.Text style={{color:'white'}}>
      {
          description
      }
    </Card.Text>
    
  </Card.Body>
</Card>
    );
};

export default AboutPost;