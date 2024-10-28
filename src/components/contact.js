import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact Us</h2>
          <div className="subtitle">Get connected with us</div>
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
      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62399.89548383072!2d6.628273709919996!3d12.18084739487635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b143514ddead5b%3A0x52d8f3793a2fef6c!2sGusau%20632101%2C%20Zamfara!5e0!3m2!1sen!2sng!4v1728386975115!5m2!1sen!2sng"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Container fluid>
        <div className="contact-info">
          <ul>
            <li>
              <i className="fas fa-envelope iconic"></i>
              Zamfarainvestmentcompany@gmail.com
            </li>
            <li>
              <i className="fas fa-phone iconic"></i>
              +234 906 800 0218
            </li>
            <li>
              <i className="fas fa-map-marker-alt iconic"></i>
              No. 29. JB. Yakubu Road Canteen Area, Gusau Zamfara State,
              Nigeria.
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
