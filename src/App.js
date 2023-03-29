import React from "react";

import { Container, Row, Col, Image, Button, Carousel } from "react-bootstrap";
import MassageServices from "./components/MassageServices";

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
    <Carousel id="home" fade interval={3000}>
      <Carousel.Item className="vh-100">
        <Image
          src="/images/Deep Tissue Massage.jpg"
          fluid
          className="w-100 rounded shadow"
          alt="Deep Tissue Massage"
        />
        <Carousel.Caption>
          <h3>Deep Tissue Massage</h3>
          <p>
            Deep tissue massage involves slow, firm pressure and targets
            specific areas of tension and pain. The pressure used in a deep
            tissue massage can be intense and may cause discomfort or soreness
            during and after the massage.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="vh-100">
        <Image
          src="/images/Relaxation.jpg"
          fluid
          className="w-100 rounded shadow"
          alt="Relaxation"
        />
        <Carousel.Caption>
          <h3>Relaxation Massage</h3>
          <p>
            Relaxation massage focuses on reducing stress in the body. It
            typically involves long, flowing strokes that are applied with light
            to moderate pressure, along with kneading, circular movements.
            Common areas targeted are the head, neck, shoulders, hands, ands
            feet.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="vh-100">
        <Image
          src="/images/Fascial Stretch Therapy.jpg"
          fluid
          className="w-100 rounded shadow"
          alt="Fascial Stretch Therapy"
        />
        <Carousel.Caption>
          <h3>Fascial Stretch Therapy</h3>
          <p>
            Fascial Stretch Therapy (FST) is a stretching technique that focuses
            on the fascia, a network of connective tissue that surrounds muscles
            and joints. The goal of FST is to improve mobility and movement
            patterns. FST is often used to improve athletic performance and
            reduce the risk of injury, but it can also be beneficial for
            individuals with chronic pain.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="vh-100">
        <Image
          src="/images/Trigger Point Therapy.jpg"
          fluid
          className="w-100 rounded shadow"
          alt="Trigger Point Therapy"
        />
        <Carousel.Caption>
          <h3>Trigger Point Therapy</h3>
          <p>
            Trigger point therapy focuses on relieving specific areas of pain
            and tension in the body known as trigger points or “knots”. Trigger
            points are hyperirritable spots in a tight band of muscle tissue
            that can cause discomfort, limited mobility, and/or headaches. The
            pressure is usually applied in a gradual and sustained manner and
            may cause some discomfort or pain as the trigger point releases.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

function Home() {
  return (
    <Container className="py-5">
      <Row>
        <Col md={7}>
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
        </Col>
        <Col md={5}>
          <Image
            src="/images/Table Setup.jpg"
            alt="Massage photo"
            fluid
            className="rounded shadow"
          />
        </Col>
      </Row>
    </Container>
  );
}

function About() {
  return (
    <Container className="py-5" id="about">
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
    <Container id="services">
      <MassageServices />
    </Container>
  );
}

export default App;
