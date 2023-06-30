import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark py-4 bottom-0 w-100">
            <Container>
                <Row className="">
                    <Col md="6">
                        <h5 className="text-white">Contact Information</h5>
                        <ul className="list-unstyled">
                            <li className="text-white">Phone: (519) 872-0460</li>
                            <li className="text-white">Email: jordan.b@live.ca</li>
                        </ul>
                    </Col>
                    <Col justify_content="center" md="6" className="text-md-end">
                        <p className="text-white">Jordan Brission Mobile Massage Therapy</p>
                    </Col>
                </Row>
            </Container>
        </footer >
    );
};

export default Footer;
