import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

function About() {
  return (
    <main>
      <Container className="p-5">
        <Row className="px-3 px-md-5 pb-3 pb-md-5">
          <Col className="d-flex flex-column align-items-center">
            <h1 className="pb-3">About Me</h1>
            <Image
              src="/images/Outside.jpg"
              fluid
              className="w-100"
            />
          </Col>
        </Row>

        <Row className="px-3 px-md-5">
          <Col md={3} className="d-none d-md-block">
            <Image
              src="/images/Hobbies.png"
              fluid
              className="h-100"
            />
          </Col>

          <Col md={9}>
            <Row>
              <Col xs={12}>
                <p>
                  As a Registered Massage Therapist, I have a strong foundation
                  in physical therapy, holistic health, and fitness. I completed
                  my studies at Fanshawe College's Massage Therapy program in
                  2022, where I developed a deep understanding of the human body
                  and its interconnectedness. My goal is to provide exceptional
                  care to all my clients by focusing on their individual needs.
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
                  In addition to my professional work, I lead an active
                  lifestyle that includes playing sports, working out, and
                  spending time in nature. I believe that physical activity is
                  an essential part of a healthy lifestyle and strive to inspire
                  others to make movement a priority in their lives. I also
                  volunteer at the Stoney Creek YMCA on weekends, where I get
                  the opportunity to connect with my community and give back.
                </p>
                <p>
                  If you are looking for a knowledgeable and compassionate
                  massage therapist, look no further. I am committed to
                  providing the highest quality of care to all my clients and
                  look forward to helping you achieve your health goals.
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
        </Row>
      </Container>
    </main>
  );
}

export default About;
