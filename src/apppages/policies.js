import "./aboutpage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img122 from "../assets/images/zsip-image.jpg";
export default function Apppolicies() {
  return (
    <div className="policies-page">
      <div id="pagetitle" className="page-title bg-image">
        <div className="title-container">
          <div className="page-title-inner" style={{ opacity: 1 }}>
            <div className="page-title-holder">
              <h1 className="page-title">POLICIES</h1>
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
              <h3>--Policies--</h3>

              <p>
                For the Company to participate in any project, the followings
                are required:-
                <ul>
                  <li>
                    Any prospective client/project promoter will have to hold
                    substantial portion of the equity capital of the project.
                  </li>
                  <li>
                    Security loans; Loans are secured by first charge on all
                    fixed assets.
                  </li>
                  <li>
                    Investment/mortgage agreement may be entered into between
                    the parties involved.
                  </li>
                  <li>
                    Detailed feasibility report on the proposed project must be
                    presented; in case of on-going projects, audited annual
                    accounts for at least three years must be submitted.
                  </li>
                </ul>
              </p>
              <p>
                The Company gives priority to projects that:-
                <ul>
                  <li> Maximize the use of Local Raw materials</li>
                  <li>
                    Promote provision of employment to the indigenes with
                    requisite training
                  </li>
                  <li>Promote Import Substitution and Export Potentials</li>
                  <li>Transfer Modern Technology</li>
                  <li> Are Technically Feasible</li>
                  <li> Are Commercially Viables</li>
                  <li> Are Socially Acceptable</li>
                </ul>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
