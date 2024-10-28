import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./hero.css";
import AOS from "aos";

export default function Appmsc() {
  return (
    <section id="msc-section" className="msc-section">
      <div className="grid-container">
        <Container fluid>
          <Row>
            <Col lg={true} className="text-align">
              <i className="fa fa-home iconic"></i>
              <h3>OUR MISSION</h3>
              <p>
                To be the main vehicle for the actualization of the state
                Governments through a planned process of projects in the private
                sector on strict commercial principle and the efficient
                management of all state investments.
              </p>
            </Col>
            <Col lg={true} className="text-align">
              <i className="fa fa-eye-slash iconic"></i>
              <h3>OUR VISION</h3>
              <p>
                To create a unique investment outfit providing creative and
                effective solution to business equipments and problems of our
                customers
              </p>
            </Col>
            <Col lg={true} className="text-align">
              <i className="fa fa-venus-double iconic"></i>
              <h3>CORE VALUES</h3>
              <p>
                <ul>
                  <li>Integrity</li>
                  <li>Accountability</li>
                  <li>Reliability</li>
                  <li>Valued</li>
                  <li>Respected and fairness</li>
                  <li>
                    Fulfilling the Government’s industrial development
                    objectives and its equity investment plans.
                  </li>
                </ul>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
