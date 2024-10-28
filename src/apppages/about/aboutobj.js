import "../../apppages/aboutpage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img122 from "../../assets/images/banner-business1.jpg";
export default function Aboutobj() {
  return (
    <div className="obj-page">
      <div id="pagetitle" className="page-title bg-image">
        <div className="title-container">
          <div className="page-title-inner" style={{ opacity: 1 }}>
            <div className="page-title-holder">
              <h1 className="page-title">OBJECTIVES</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container content-containers">
        <Container fluid>
          <Row>
            <Col lg={true}>
              <div className="content-image">
                <img src={img122} />
              </div>
            </Col>
            <Col lg={true} className="about-col">
              <h3>--Overview--</h3>
              <h2>Objectives</h2>
              <p>
                The Company operates as a government-owned or
                government-affiliated entity with the underlisted functions:-
                <ul>
                  <li>Real Estate Development and Management</li>
                  <li>Investment Portfolio management</li>
                  <li>Public Private Partnerships (PPPs)</li>
                  <li>Economic Development</li>
                  <li>Advisory services</li>
                  <li>Revenue Generation for the Government</li>
                  <li>Sustainable and Social Development</li>
                </ul>
              </p>
              <p>
                Crucial in managing the state's real estate assets, driving
                economic growth through property development and strategic
                investments.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
