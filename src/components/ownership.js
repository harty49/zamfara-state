import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./hero.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Appownership() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <section id="ownership-section" className="ownership-section">
      <div className="grid-container">
        <Container fluid>
          <Row>
            <Col className="text-align">
              <h3 data-aos="fade-right">STABLE PARTNER FOR YOUR PROJECTS</h3>
              <h3>Owned by the Zamfara State Government</h3>
              <p>
                Zamfara State Investments & Property Development Company was
                incorporated in Nigeria on 14th January 2000 under the Companies
                and Allied Matters Act, 1990 as a private limited liability
                company. The Company is wholly owned by the Zamfara State
                Government and its capital structure is fully financed by
                shareholder’s equity contribution.
              </p>
              <p>
                We provide the necessary support in all sectors of the economy
                e.g Agriculture, Mining, Industry, Electricity, Estate
                management and Commodity.
              </p>
              <Link data-aos="fade-right" className="btn btn-primary">
                CONTACT US
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
