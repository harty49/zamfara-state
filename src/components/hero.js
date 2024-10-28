import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./hero.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function AppHero() {
  return (
    <section id="hero" className="hero-block">
      <div className="hero-section hero-image">
        <Container className="hero-container" fluid>
          <Row className="hero-rows">
            <Col className="hero-first-col" lg={true}>
              <h1>
                Zamfara State Investment & Property Development Company Limited
              </h1>
              <p className="italics">...better life with investment.</p>
              <div className="hero-links">
                <Link className="btn btn-primary">
                  Contact Us{" "}
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </Link>
                <Link className="btn btn-primary">
                  Services{" "}
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            </Col>
            <Col className="hero-col" lg={true}>
              <div className="hero-img-container">
                <div className="zsmap"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
