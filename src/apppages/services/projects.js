import "../../apppages/aboutpage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img122 from "../../assets/images/agric.jpg";
export default function Appprojects() {
  return (
    <div className="projects-page">
      <div id="pagetitle" className="page-title bg-image">
        <div className="title-container">
          <div className="page-title-inner" style={{ opacity: 1 }}>
            <div className="page-title-holder">
              <h1 className="page-title">PROJECTS PROMOTION</h1>
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
              <h2>Projects Promotion</h2>
              <p>
                Pursuant to its articles the company has, as one of its major
                roles the identification of projects that are commercially
                viable for promotion either alone or in conjunction with other
                interested investors – corporate or individuals.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
