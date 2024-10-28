import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./hero.css";

export default function Appgrid() {
  return (
    <section id="grid-section" className="grid-section">
      <div className="grid-container">
        <Container fluid>
          <Row>
            <Col sm={4} className="text-align">
              <h3>COMMERCIAL ACTIVITIES</h3>
              <p>
                Stimulating the promotion and growth of Commercial activities
                throughout Zamfara State.
              </p>
            </Col>
            <Col sm={4} className="text-align">
              <h3>INVESTOR SUPPORT</h3>
              <p>
                Assisting local and foreign investors to promote and run
                businesses through investment or partnership.
              </p>
            </Col>
            <Col sm={4} className="text-align">
              <h3>INDUSTRIAL DEVELOPMENT</h3>
              <p>
                Fulfilling the Government’s industrial development objectives
                and its equity investment plans.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
