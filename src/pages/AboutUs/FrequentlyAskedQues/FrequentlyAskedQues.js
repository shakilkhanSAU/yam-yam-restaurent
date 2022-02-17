import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import AboutUs from '../AboutUs/AboutUs';

const FrequentlyAskedQues = () => {
    return (
        <>
            <Header></Header>
            <AboutUs></AboutUs>
            <Container>
                <h2 style={{ fontWeight: 'bold' }}>Frequently Asked Question</h2>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <h6 style={{ color: 'crimson', fontWeight: 'bold' }}>From When You Start Your Journey?</h6>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p style={{ color: 'gray', fontSize: '16px' }}>From 1997, we started our Journey with 2 employ in Dhaka, Bangladesh. Now we have 100 branch in 45 different country. As a restaurant operator, you have to wear many different hats, even if the responsibilities you take on are not within your expertise. Writing is one of those tasks. <br />
                                <br />
                                A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings.

                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <h6 style={{ color: 'crimson', fontWeight: 'bold' }}>What is The Secret of Your Success?</h6>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p style={{ color: 'gray', fontSize: '16px' }}>
                                <span style={{ fontweight: 'bold', color: 'crimson' }}>Hard working is the key of success!</span>. The secret behind our success story is the hard working. We worked hard and we are now successful in our goal.  As a restaurant operator, you have to wear many different hats, even if the responsibilities you take on are not within your expertise. Writing is one of those tasks.
                                <br />
                                <br />
                                A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            <h6 style={{ color: 'crimson', fontWeight: 'bold' }}>Do You Have Spacial Corner for Disability People and Senior Citizen?</h6>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p style={{ color: 'gray', fontSize: '16px' }}>
                                <span style={{ fontweight: 'bold', color: 'crimson' }}>Yes, we have a special corner for them.</span> The secret behind our success story is the hard working. We worked hard and we are now successful in our goal.  As a restaurant operator, you have to wear many different hats, even if the responsibilities you take on are not within your expertise. Writing is one of those tasks.
                                <br />
                                <br />
                                A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default FrequentlyAskedQues;