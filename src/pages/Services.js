import React from 'react';
import { Container, Row, Col, Carousel, Image, Button } from 'react-bootstrap';

function Services() {
    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <h1>Our Services</h1>
                </Col>
            </Row>
            <Row className="my-4">
                <Col>
                    <Carousel fade interval={3000}>
                        <Carousel.Item>
                            <Image
                                src="/images/Deep Tissue Massage.jpg"
                                fluid
                                className="w-100 rounded shadow"
                                alt="Deep Tissue Massage"
                            />
                            <Carousel.Caption>
                                <h3>Deep Tissue Massage</h3>
                                <p>
                                    Deep tissue massage involves slow, firm pressure and targets specific areas of tension and pain. The pressure used in a deep tissue massage can be intense and may cause discomfort or soreness during and after the massage.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                src="/images/Relaxation.jpg"
                                fluid
                                className="w-100 rounded shadow"
                                alt="Relaxation"
                            />
                            <Carousel.Caption>
                                <h3>Relaxation Massage</h3>
                                <p>
                                    Relaxation massage focuses on reducing stress in the body. It typically involves long, flowing strokes that are applied with light to moderate pressure, along with kneading, circular movements. Common areas targeted are the head, neck, shoulders, hands, ands feet.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                src="/images/Fascial Stretch Therapy.jpg"
                                fluid
                                className="w-100 rounded shadow"
                                alt="Fascial Stretch Therapy"
                            />
                            <Carousel.Caption>
                                <h3>Fascial Stretch Therapy</h3>
                                <p>
                                    Fascial Stretch Therapy (FST) is a stretching technique that focuses on the fascia, a network of connective tissue that surrounds muscles and joints. The goal of FST is to improve mobility and movement patterns. FST is often used to improve athletic performance and reduce the risk of injury, but it can also be beneficial for individuals with chronic pain.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                src="/images/Trigger Point Therapy.jpg"
                                fluid
                                className="w-100 rounded shadow"
                                alt="Trigger Point Therapy"
                            />
                            <Carousel.Caption>
                                <h3>Trigger Point Therapy</h3>
                                <p>
                                    Trigger point therapy focuses on relieving specific areas of pain and tension in the body known as trigger points or “knots”. Trigger points are hyperirritable spots in a tight band of muscle tissue that can cause discomfort, limited mobility, and/or headaches. The pressure is usually applied in a gradual and sustained manner and may cause some discomfort or pain as the trigger point releases.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row className="my-4">
                <Col>
                    <Col xs={12} className="d-flex pt-3">
                        <Button
                            size="lg"
                            className="mx-auto"
                            variant="dark"
                            href="https://www.picktime.com/mobile"
                            target="_blank"
                        >
                            Schedule an Appointment Now
                        </Button>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}

export default Services;
