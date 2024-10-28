import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./hero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Appaoo() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <section id="aoo-section" className="aoo-section">
      <div className="grid-container">
        <Container className="aoo-container" fluid>
          <div className="text-align ">
            <h1 data-aos="fade-up">AREAS OF OPERATIONS</h1>
            <p>
              We are involved in a range of sectors and industries which include
              investment in the Nigerian capital market, the promotion of
              special projects, property and real estate development, various
              commercial activities, and solid minerals exploration and mining.
            </p>
          </div>
          <Row className="aoo-row">
            <Col lg={true} className="aoo-col">
              <h3 data-aos="fade-right">Nigerian Capital Market & Project</h3>
              <p>
                The Company has an investment portfolio in over 34 companies
                operating in various sectors of the Nigerian economy, with a
                total market value in excess of N1 billion.
              </p>
              <p>
                Projects Promotion:
                <br></br>
                Pursuant to its articles the company has, as one of its major
                roles the identification of projects that are commercially
                viable for promotion either alone or in conjunction with other
                interested investors – corporate or individuals.
              </p>
            </Col>
            <Col lg={true} className="aoo-col">
              <h3 data-aos="fade-right">Property & Real Estate Development</h3>
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
          <Row className="aoo-row">
            <Col lg={true} className="aoo-col">
              <h3 data-aos="fade-right">Commercial Activities</h3>
              <p>
                The Company engages in a number of commercial activities such as
                the purchase of agricultural products like high grade Sesame
                seeds, Sorghum, Millet, wheat, Jatropha and Herbiscus.
              </p>
              <p>
                The Company is the second firm to be registered as an
                e-warehouse operator in the North Western Nigeria. An
                Approval-in-Principle was given to the Company using its
                existing warehouse facilities at Maigatari, it is also
                registered as an Institutional Trader with the Nigerian
                Commodity Exchange, while two of its staff are registered as
                Authorized Dealing Clerks of the Exchange.
              </p>
            </Col>
            <Col lg={true} className="aoo-col">
              <h3 data-aos="fade-right">Solid Minerals</h3>
              <p>
                Zamfara State Investment and Property Development Company
                Limited has also stepped up efforts to attract local and foreign
                investors to the state for economical viability and growth.
              </p>
              <p>
                Zamfara State is blessed with natural and mineral resources such
                as gold, agricultural produces and other precious stones. The
                Natural Resources, when exploited, expectedly brings in revenue
                that contributes to the development of local communities.
              </p>
            </Col>
          </Row>
          <Row className="aoo-row">
            <Col lg={true} className="aoo-col">
              <h3 data-aos="fade-right">Commercial Activities</h3>
              <p>
                The Company engages in a number of commercial activities such as
                the purchase of agricultural products like high grade Sesame
                seeds, Sorghum, Millet, wheat, Jatropha and Herbiscus.
              </p>
              <p>
                The Company is the second firm to be registered as an
                e-warehouse operator in the North Western Nigeria. An
                Approval-in-Principle was given to the Company using its
                existing warehouse facilities at Maigatari, it is also
                registered as an Institutional Trader with the Nigerian
                Commodity Exchange, while two of its staff are registered as
                Authorized Dealing Clerks of the Exchange.
              </p>
            </Col>
            <Col lg={true} className="aoo-col">
              <h3 data-aos="fade-right">Housing Provision</h3>
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
                effective economic growth and development of the state.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
