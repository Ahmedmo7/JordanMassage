import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark py-4 bottom-0 w-100">
            <Container>
                <Row className="">
                    <Col md="4">
                        <h5 className="text-white">Hours of Operation</h5>
                        <ul className="list-unstyled">
                            <li className="text-white">Tuesday: 4:00PM-8:00PM</li>
                            <li className="text-white">Thursday: 9:00AM-1:00PM</li>
                            <li className="text-white">Saturday: 9:00AM-5:00PM</li>
                        </ul>
                    </Col>
                    <Col md="4">
                        <h5 className="text-white">Contact Information</h5>
                        <ul className="list-unstyled">
                            <li className="text-white">Phone: (519) 872-0460</li>
                            <li className="text-white">Email: jordan.b@live.ca</li>
                        </ul>
                    </Col>
                    <Col md="4" className="text-md-end">
                        <p className="text-white">Jordan Brission Mobile Massage Therapy</p>
                    </Col>
                </Row>
            </Container>
        </footer >
    );
};

export default Footer;
