import "../../apppages/aboutpage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img122 from "../../assets/images/pexels-pavel-danilyuk-7937742.jpg";
export default function Appproperty() {
  return (
    <div className="housing-page">
      <div id="pagetitle" className="page-title bg-image">
        <div className="title-container">
          <div className="page-title-inner" style={{ opacity: 1 }}>
            <div className="page-title-holder">
              <h1 className="page-title">
                PROPERTY AND REAL ESTATE DEVELOPMENT
              </h1>
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
              <h2>Property and Real Estate Development</h2>
              <p>
                The Company had two multi-purpose shopping malls in Dutse the
                State capital consist of two blocks; block A with 16 nos. single
                shops, 2 nos. double shops, 1 super market and a restaurant,
                block B with 20 nos. shops and 12 nos. offices, and Rabah Road
                Kaduna with 40 nos. shops and 10 nos. suites.
              </p>
              <p>
                The Company had 4 warehouses situated at its Dutse shopping
                complex and ultramodern Market in Dutse, which consist of 836
                open stalls and 500 lockup Shops.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
