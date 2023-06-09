import { Card, Row, Col } from "react-bootstrap";

function MassageServices() {
  return (
    <div className="py-5">
      <h2>Services Offered</h2>
      <Row>
        <Col md={6} lg={6} className="p-3">
          <Card className="h-100 shadow-lg">
            <Card.Img variant="top" src="/images/Deep Tissue Massage.jpg" />
            <Card.Body className="service-card">
              <Card.Title style={{ fontWeight: "bold" }}>
                Deep Tissue Massage
              </Card.Title>
              <Card.Text>
                Deep tissue massage involves slow, firm pressure and targets
                specific areas of tension and pain. The pressure used in a deep
                tissue massage can be intense and may cause discomfort or
                soreness during and after the massage.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={6} className="p-3">
          <Card className="h-100 shadow-lg">
            <Card.Img variant="top" src="/images/Relaxation.jpg" />
            <Card.Body className="service-card">
              <Card.Title style={{ fontWeight: "bold" }}>
                Relaxation Massage
              </Card.Title>
              <Card.Text>
                Relaxation massage focuses on reducing stress in the body. It
                typically involves long, flowing strokes that are applied with
                light to moderate pressure, along with kneading, circular
                movements. Common areas targeted are the head, neck, shoulders,
                hands, ands feet.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={6} className="p-3">
          <Card className="h-100 shadow-lg">
            <Card.Img variant="top" src="/images/Fascial Stretch Therapy.jpg" />
            <Card.Body className="service-card">
              <Card.Title style={{ fontWeight: "bold" }}>
                Fascial Stretch Therapy
              </Card.Title>
              <Card.Text>
                Fascial Stretch Therapy (FST) is a stretching technique that
                focuses on the fascia, a network of connective tissue that
                surrounds muscles and joints. The goal of FST is to improve
                mobility and movement patterns. FST is often used to improve
                athletic performance and reduce the risk of injury, but it can
                also be beneficial for individuals with chronic pain.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={6} className="p-3">
          <Card className="h-100 shadow-lg">
            <Card.Img variant="top" src="/images/Trigger Point Therapy.jpg" />
            <Card.Body className="service-card">
              <Card.Title style={{ fontWeight: "bold" }}>
                Trigger Point Therapy
              </Card.Title>
              <Card.Text>
                Trigger point therapy focuses on relieving specific areas of
                pain and tension in the body known as trigger points or “knots”.
                Trigger points are hyperirritable spots in a tight band of
                muscle tissue that can cause discomfort, limited mobility,
                and/or headaches. The pressure is usually applied in a gradual
                and sustained manner and may cause some discomfort or pain as
                the trigger point releases.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default MassageServices;
