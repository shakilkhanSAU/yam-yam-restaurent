import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Reviews.css'
const Reviews = ({ review }) => {
    const { name, opinion, img } = review;
    return (
        <div>
            <Col className="reviews">
                <Card className="reviews-style">
                    {/* review cards data */}
                    <Card.Img className='collection-img mb-3 w-50 rounded-circle' variant="top" src={img} />
                    <Card.Body className='infos'>
                        <Card.Title className='infos-Text' >{name}</Card.Title>
                        <Card.Text>{opinion}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Reviews;