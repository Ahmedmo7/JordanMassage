import { Card } from "react-bootstrap";

function ServiceCard({title, text, src}) {
  return (
    <Card className="h-100 shadow-lg">
      <Card.Img variant="top" src={src} />
      <Card.Body className="service-card">
        <Card.Title style={{ fontWeight: "bold" }}>
          {title}
        </Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;
