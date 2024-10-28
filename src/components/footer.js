import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

export default function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container fluid>
      <div className="copyright">&copy; 2024 ZSIPDCL. All Rights Reserved.</div>
      <div className="socials">
        <ul>
          <li>
            <a href="https://facebook.com">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://whatsapp.com">
              <i className="fab fa-whatsapp"></i>
            </a>
          </li>
          <li>
            <a href="https://x.com">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
      {showTopBtn && <div className="go-top" onClick={goTop}></div>}
    </Container>
  );
}
