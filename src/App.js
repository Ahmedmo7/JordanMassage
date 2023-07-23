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
                        <Image
                            src="/images/Table Setup.jpg"
                            alt="Massage photo"
                            fluid
                            className={`rounded shadow ${isMobile ? "mb-4" : ""}`}
                        />
                    </Col>
                    {/* On larger screens, show the title and content on the right */}
                    <Col md={7}>
                        {!isMobile && (
                            <div className="d-none d-md-block">
                                <h1>Jordan Brisson Mobile Massage Therapy</h1>
                                <h4 style={{ fontStyle: "italic" }}>Your home, your haven.</h4>
                            </div>
                        )}
                        {/* The rest of the content */}
                        <p>
                            As a Registered Massage Therapist, my mission is to provide relaxation, pain relief, and improved overall well-being for those who have mobility issues or simply enjoy the convenience of in-home massage. I strive to ensure that every client feels comfortable, safe, and respected during their massage session.
                        </p>
                        <p>
                            As a massage therapist, the most important tool at my disposal is the power of listening. Understanding my client and their goals, assessing their needs, and applying manual therapies all require listening, whether it be with my ears or with my hands.
                        </p>
                        <p>
                            Aside from listening, there are various ways I aim to help my clients. I provide deep tissue massage, trigger point therapy, and Fascial Stretch Therapy, but I also understand the importance of relaxation and its profound effect on improving physical and emotional health.
                        </p>
                        <p>
                            Lastly, I believe in using high-quality, natural products that are good for you and the environment. The massage oil I currently use is cold-pressed hemp seed oil harvested in Canada, and the linens used on the massage bed are 100% cotton.
                        </p>
                        <br />
                        <i><h3>Direct billing is now offered for most insurance companies</h3></i>
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
