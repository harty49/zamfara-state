import "../../apppages/aboutpage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img122 from "../../assets/images/banner-business1.jpg";
export default function Aboutbb() {
  return (
    <div className="bb-page">
      <div id="pagetitle" className="page-title bg-image">
        <div className="title-container">
          <div className="page-title-inner" style={{ opacity: 1 }}>
            <div className="page-title-holder">
              <h1 className="page-title">BOARD MEMBERS</h1>
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
              <h2>BOARD MEMBERS</h2>
              <p>
                The Company is structured along three Divisions namely;
                Operations, Finance & Accounts, and Administration & Personnel,
                all the divisions report directly to the Managing Director/CEO.
                The operational policies of the Company are formulated by a
                Seven- member Board of Directors, while the implementation of
                such policies rests solely with a team of Management staff
                comprising of the three Heads of Divisions and the Managing
                Director/CEO (also a member of the Board) as the leader of the
                team.
              </p>
              <p>
                Currently the Company’s staff strength stands at 21, made up of
                8 senior staff and 13 intermediary and junior staff.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
