import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import MassageServices from "./components/MassageServices";
import "./App.css"; // Import the custom CSS file

function App() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if the window size is mobile on initial mount and when it's resized
        function handleResize() {
            setIsMobile(window.innerWidth <= 767);
        }

        window.addEventListener("resize", handleResize);
        handleResize(); // Check on initial mount

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="p-5">
            <Container>
                <Row>
                    {/* On mobile, move the title to the top */}
                    {isMobile && (
                        <Col xs={12} className="text-center mobile-title mb-4">
                            <h1>Jordan Brisson Mobile Massage Therapy</h1>
                            <h4 style={{ fontStyle: "italic" }}>Your home, your haven.</h4>
                        </Col>
                    )}
                    {/* On larger screens, show the image on the left */}
                    <Col md={5}>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Image
                            src="/images/Outside1.jpg"
                            alt="Photo of "
                            fluid
                            className={`rounded shadow intro-image ${isMobile ? "mb-4" : ""}`}
                        />
                    </Col>
                    {/* On larger screens, show the title and content on the right */}
                    <Col md={7}>
                        {!isMobile && (
                            <div className="d-none d-md-block">
                                <h1>Jordan Brisson Mobile Massage Therapy</h1>
                                <center><h4 style={{ fontStyle: "italic" }}>Your home, your haven.</h4></center>
                                <br></br>
                            </div>
                        )}
                        {/* The rest of the content */}
                        <p>
                            As a <strong>Registered Massage Therapist</strong>, I strive to deliver an exceptional massage that targets your unique needs. Whether you are an athlete, an office worker, a person who lacks mobility, or someone who needs to destress, your massage and treatment plan will be <strong>designed for you.</strong>                         </p>
                        <p>
                            As a massage therapist, the most important tool at my disposal is the power of listening. Understanding my client and their goals, assessing their needs, and applying manual therapies all require listening, whether it be with my ears or with my hands.
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
