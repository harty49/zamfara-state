import "../apppages/aboutpage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../components/hero.css";
// import img122 from "../../assets/images/agric.jpg";
export default function Appcontactpage() {
  return (
    <div className="contact-page">
      <div id="pagetitle" className="page-title bg-image">
        <div className="title-container">
          <div className="page-title-inner" style={{ opacity: 1 }}>
            <div className="page-title-holder">
              <h1 className="page-title">CONTACT US</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container content-containers">
        <Container fluid>
          <div className="title-holder">
            <h2>Get In Touch</h2>
            <div className="subtitle">
              If you have any questions, suggestions or requests, please contact
              us as follows:
            </div>
          </div>
          <Form className="contact-form">
            <Row>
              <Col sm={4}>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </Col>
              <Col sm={4}>
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
              </Col>
              <Col sm={4}>
                <Form.Control
                  type="tel"
                  placeholder="Enter your contact number"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <Form.Control
                  as="textarea"
                  placeholder="Enter a message for us"
                  required
                />
              </Col>
            </Row>
            <div className="btn-holder">
              <Button className="submit-btn" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Container>
        <Container fluid>
          <Row>
            <Col className="text-align">
              <i className="fas fa-envelope iconic"></i>
              <h4> zamfarainvestmentcompany@gmail.com</h4>
            </Col>
            <Col className="text-align">
              <i className="fas fa-phone iconic"></i>
              <h4>+234 906 800 0218</h4>
            </Col>
            <Col className="text-align">
              <i className="fas fa-map-marker-alt iconic"></i>
              <h4>
                {" "}
                No. 29. JB. Yakubu Road Canteen Area, Gusau Zamfara State,
                Nigeria.
              </h4>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
