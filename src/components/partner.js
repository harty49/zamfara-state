import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./hero.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Apppartner() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <section id="partner-section" className="partner-section">
      <div className="grid-container">
        <Container fluid>
          <Row>
            <Col className="text-align">
              <h2>Partner with us today!</h2>
            </Col>
            <Col className="text-align">
              <Link data-aos="fade-right" className="btn btn-primary">
                CONTACT US{" "}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
