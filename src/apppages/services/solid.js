import "../../apppages/aboutpage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img122 from "../../assets/images/solid.jpg";
export default function Appsolid() {
  return (
    <div className="solid-page">
      <div id="pagetitle" className="page-title bg-image">
        <div className="title-container">
          <div className="page-title-inner" style={{ opacity: 1 }}>
            <div className="page-title-holder">
              <h1 className="page-title">SOLID MINERALS</h1>
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
              <h2>Solid Minerals</h2>
              <p>
                Zamfara State Investment and Property Development Company
                Limited has also stepped up efforts to attract local and foreign
                investors to the state for economical viability and growth.
                Zamfara State is blessed with natural and mineral resources such
                as gold, agricultural produces and other precious stones.
              </p>
              <p>
                The Natural Resources, when exploited, expectedly brings in
                revenue that contributes to the development of local
                communities.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
