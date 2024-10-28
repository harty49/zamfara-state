import "../../apppages/aboutpage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Aboutprofile() {
  return (
    <div className="profile-page">
      <div id="pagetitle" className="page-title bg-image">
        <div className="title-container">
          <div className="page-title-inner" style={{ opacity: 1 }}>
            <div className="page-title-holder">
              <h1 className="page-title">PROFILE</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container content-container">
        <Container fluid>
          <Row>
            <Col className="about-col">
              <h3>--Overview--</h3>
              <h2>About Us</h2>
              <p>
                Zamfara State Investments & Property Development Company was
                incorporated in Nigeria on 14th January 2000 under the Companies
                and Allied Matters Act, 1990 as a private limited liability
                company. The Company is wholly owned by the Zamfara State
                Government and its capital structure is fully financed by
                shareholder’s equity contribution.
              </p>
              <p>
                {" "}
                We provide the necessary support in all sectors of the economy
                e.g Agriculture, Mining, Industry, Electricity, Estate
                management and Commodity.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
