import React from 'react';
import {Card} from 'react-bootstrap'

const ReviewPortal = (props) => {
    const{name,email,imageUrl,Review}=props.review;
    return (
        <div className="col-md-3 d-flex justify-content-between mb-5 text-center">
        <Card style={{ width: '20rem'}}> 
<Card.Img variant="top" src={imageUrl} style={{width: '100%',height:'50%' }}/>
<Card.Body style={{backgroundColor:'yellow'}}>
<Card.Title style={{color: 'red'}}>{name}</Card.Title>
<Card.Text >
 {
     Review
 }
</Card.Text>



</Card.Body>
</Card>

    </div>
    );
};

export default ReviewPortal;