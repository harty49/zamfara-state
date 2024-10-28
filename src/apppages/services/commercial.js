import "../../apppages/aboutpage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img122 from "../../assets/images/gold.jpg";
export default function Appcommercial() {
  return (
    <div className="commercial-page">
      <div id="pagetitle" className="page-title bg-image">
        <div className="title-container">
          <div className="page-title-inner" style={{ opacity: 1 }}>
            <div className="page-title-holder">
              <h1 className="page-title">COMMERCIAL ACTIVITIES</h1>
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
              <h2>Commercial Activities</h2>
              <p>
                The Company engages in a number of commercial activities such as
                the purchase of agricultural products like high grade Sesame
                seeds, Sorghum, Millet, wheat, Jatropha and Herbiscus. The
                Company is the second firm to be registered as an e-warehouse
                operator in the North Western Nigeria. An Approval-in-Principle
                was given to the Company using its existing warehouse facilities
                at Maigatari, it is also registered as an Institutional Trader
                with the Nigerian Commodity Exchange, while two of its staff are
                registered as Authorized Dealing Clerks of the Exchange.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
