import "../../apppages/aboutpage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img122 from "../../assets/images/pexels-pavel-danilyuk-7937742.jpg";
export default function Apphousing() {
  return (
    <div className="housing-page">
      <div id="pagetitle" className="page-title bg-image">
        <div className="title-container">
          <div className="page-title-inner" style={{ opacity: 1 }}>
            <div className="page-title-holder">
              <h1 className="page-title">HOUSING PROVISION</h1>
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
              <h2>Housing Provision</h2>
              <p>
                Zamfara State Investment and Property Development Company
                Limited (ZSIPDCL) has recognized that the majority in need of
                housing are the low income earners. Thus, the two major
                components of the state company's framework with regards to
                shelter address the fundamental issues of availability,
                affordability and the provision of adequate housing that is
                safe, secure, accessible and comfortable for the people of the
                state.
              </p>
              <p>
                The housing project of the state has a tremendous impact on job
                creation, employment, security, socio-political stability,
                effective economic growth and development of the state. It's the
                company's plan to take positive steps to ensure that the less
                priviled members of the society,owned or have access to decent,
                safe and sanitary housing accommodation at affordable cost.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
