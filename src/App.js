import React from "react";

import { Container, Row, Col, Image, Button, Carousel } from "react-bootstrap";
import CarouselContent from "./components/CarouselContent";
import MassageServices from "./components/MassageServices";
import SERVICE_INFO from "./copy";

function App() {
  return (
    <div>
      <Landing />
      <Home />
      <About />
      <Services />
    </div>
  );
}

function Landing() {
  return (
    <Carousel id="" as="section" fade interval={3000}>
      {SERVICE_INFO.map((service) => (
        <Carousel.Item className="vh-100" key={service.title}>
          <CarouselContent {...service} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

function Home() {
  return (
    <Container className="py-5" id="home" as="section">
      <Row>
        <Col lg={7}>
          <h1>Jordan Brisson Mobile Massage Therapy</h1>
          <h4 style={{ fontStyle: "italic" }}>Your home, your haven.</h4>
          <p>
            As a Registered Massage Therapist, my mission is to provide
            relaxation, pain relief, and improved overall well-being for those
            who have mobility issues or simply enjoy the convenience of in-home
            massage. I strive to ensure that every client feels comfortable,
            safe, and respected during their massage session.
          </p>
          <p>
            As a massage therapist, the most important tool at my disposal is
            the power of listening. Understanding my client and their goals,
            assessing their needs, and applying manual therapies all require
            listening, whether it be with my ears or with my hands.
          </p>
          <p>
            Aside from listening, there are various ways I aim to help my
            clients. I provide deep tissue massage, trigger point therapy, and
            Fascial Stretch Therapy, but I also understand the importance of
            relaxation and its profound effect on improving physical and
            emotional health.
          </p>
          <p>
            Lastly, I believe in using high-quality, natural products that are
            good for you and the environment. The massage oil I currently use is
            cold pressed hemp seed oil harvested in Canada, and the linens used
            on the massage bed are 100% cotton.
          </p>
          <div className="d-none d-lg-flex py-2">
            <Button
              size="lg"
              className="mx-auto"
              variant="dark"
              href="https://www.picktime.com/mobile"
              target="_blank"
            >
              Schedule an Appointment Now
            </Button>
          </div>
        </Col>
        <Col lg={5}>
          <Image
            src="/images/Table Setup.jpg"
            alt="Massage photo"
            fluid
            className="rounded shadow"
          />
          <div className="d-flex d-lg-none pt-4">
            <Button
              size="lg"
              className="mx-auto"
              variant="dark"
              href="https://www.picktime.com/mobile"
              target="_blank"
            >
              Schedule an Appointment Now
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

function About() {
  return (
    <Container className="pt-4" id="about" as="section">
      <Row className="pb-3 pb-md-5">
        <h1 className="pb-3">About Jordan</h1>
        <Col className="d-flex flex-column align-items-center">
          <Image
            src="/images/Outside.jpg"
            fluid
            className="w-100 rounded shadow"
          />
        </Col>
      </Row>

      <Row className="">
        <Col md={9}>
          <Row>
            <Col xs={12}>
              <p>
                As a Registered Massage Therapist, I have a strong foundation in
                physical therapy, holistic health, and fitness. I completed my
                studies at Fanshawe College's Massage Therapy program in 2022,
                where I developed a deep understanding of the human body and its
                interconnectedness. My goal is to provide exceptional care to
                all my clients by focusing on their individual needs.
              </p>
              <p>
                Through my training, I have learned various techniques to
                relieve pain, rehabilitate injuries, and promote relaxation.
                Whether you are looking for relief from chronic pain or simply
                seeking a relaxing massage, I am equipped to provide the
                treatment you need. My ultimate aim is to help you feel better
                and improve your overall well-being.
              </p>
              <p>
                In addition to my professional work, I lead an active lifestyle
                that includes playing sports, working out, and spending time in
                nature. I believe that physical activity is an essential part of
                a healthy lifestyle and strive to inspire others to make
                movement a priority in their lives. I also volunteer at the
                Stoney Creek YMCA on weekends, where I get the opportunity to
                connect with my community and give back.
              </p>
              <p>
                If you are looking for a knowledgeable and compassionate massage
                therapist, look no further. I am committed to providing the
                highest quality of care to all my clients and look forward to
                helping you achieve your health goals.
              </p>
            </Col>

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
          </Row>
        </Col>

        <Col md={3} className="d-none d-md-block">
          <Image
            src="/images/hobbies.png"
            fluid
            className="h-100 rounded shadow"
          />
        </Col>
      </Row>
    </Container>
  );
}

function Services() {
  return (
    <Container id="services" as="section">
      <MassageServices />
    </Container>
  );
}

export default App;
