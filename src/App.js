import React from "react";

import { Container, Row, Col, Image } from "react-bootstrap";
import MassageServices from "./components/MassageServices";

function App() {
    return (
        <div className="p-5">
            <Container>
                <Row>
                    <Col md={7}>
                        <h1>Welcome to Jordan Brisson Massage Therapy</h1>
                        <h5>Your home, your haven.</h5>
                        <p>
                            As a Registered Massage Therapist, my mission is to provide
                            relaxation, pain relief, and improved overall well-being for
                            those who have mobility issues or simply enjoy the convenience
                            of in-home massage. I strive to ensure that every client feels
                            comfortable, safe, and respected during their massage session.
                        </p>
                        <p>
                            As a massage therapist, the most important tool at my disposal
                            is the power of listening. Understanding my client and their
                            goals, assessing their needs, and applying manual therapies all
                            require listening, whether it be with my ears or with my hands.
                        </p>
                        <p>
                            Aside from listening, there are various ways I aim to help my
                            clients. I provide deep tissue massage, trigger point therapy,
                            and Fascial Stretch Therapy, but I also understand the
                            importance of relaxation and its profound effect on improving
                            physical and emotional health.
                        </p>
                        <p>
                            Lastly, I believe in using high-quality, natural products that
                            are good for you and the environment. The massage oil I
                            currently use is cold pressed hemp seed oil harvested in Canada,
                            and the linens used on the massage bed are 100% cotton.
                        </p>
                    </Col>
                    <Col md={5}>
                        <Image
                            src="/images/Table Setup.jpg"
                            alt="Massage photo"
                            fluid
                        />
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
