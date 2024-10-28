import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import img201 from "../assets/images/zsip-logo-7.jpg";
export default function AppHeader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <div className="nav-logo">
          <img src={img201} />
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/about/objectives">
                Objectives
              </NavDropdown.Item>
              <NavDropdown.Item href="/about/structure">
                Structure
              </NavDropdown.Item>
              <NavDropdown.Item href="/about/board-members">
                Board members
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="/services/housing-provision">
                Housing Provision{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/property-real-estate-development">
                Property and Real Estate Development
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/commercial-activities">
                Commercial Activities
              </NavDropdown.Item>

              <NavDropdown.Item href="/services/solid-minerals">
                Solid Minerals
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/projects-promotion">
                Project Promotion
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/policies">Policies</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
