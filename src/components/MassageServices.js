import { Row, Col } from "react-bootstrap";

import SERVICE_INFO from "../copy";
import ServiceCard from "./ServiceCards";

function MassageServices() {
  return (
    <div className="py-5">
      <h2>Services Offered</h2>
      <Row>
        {SERVICE_INFO.map((service) => (
          <Col md={6} lg={6} className="p-3" key={service.title}>
            <ServiceCard {...service} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default MassageServices;
