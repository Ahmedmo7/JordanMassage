import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import MassageServices from "./components/MassageServices";
import "./App.css"; // Import the custom CSS file

function App() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 767);
        }

        window.addEventListener("resize", handleResize);
        handleResize(); // Check on initial mount

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="p-12">
            <Container>
                <Row>
                    {/* Image always on top */}
                    <center> <Col xs={8} className="text-center mb-12 p-4 ">
                        <Image
                            src="/images/Outside1.jpg"
                            alt="Photo of "
                            fluid
                            className="rounded shadow intro-image"
                        />
                    </Col></center>
                    {/* Title for mobile and larger screens */}
                    <Col xs={12} className="text-center mb-4">
                        <h1>Jordan Brisson Mobile Massage Therapy</h1>
                        <h4 style={{ fontStyle: "italic" }}>Your home, your haven.</h4>
                    </Col>
                    {/* Main content */}
                    <Col xs={12}>
                        <p>
                            As a <strong>Registered Massage Therapist</strong>, I strive to deliver an exceptional massage that targets your unique needs. Whether you are an athlete, an office worker, a person who lacks mobility, or someone who needs to destress, your massage and treatment plan will be <strong>designed for you.</strong>
                        </p>
                        <p>
                            I offer various massage techniques, including Swedish, deep tissue, fascial massage, stretch therapy (LVL 1 FST), trigger point therapy, lymphatic drainage, and more! I bring the massage table and linens, <strong>so all you need is an open space.</strong>
                        </p>
                        <p>
                            Booking online is easy and convenient, but for those who prefer, booking can also be done by call or text.
                        </p>
                        <br />
                        <center><strong><i><h3>Direct billing is now offered for most insurance companies</h3></i></strong></center>
                        <Button
                            className="d-lg-none w-100 my-2"
                            variant="dark"
                            href="https://jordan.noterro.com/"
                            target="_blank"
                        >
                            Book Now
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Container>
                <MassageServices />
            </Container>
        </div>
    );
}

export default App;
