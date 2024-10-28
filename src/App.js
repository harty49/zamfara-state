import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppHeader from "./components/header";
import AppFooter from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Home from "./apppages/home";
import Aboutprofile from "./apppages/about/aboutProfile";
import Aboutobj from "./apppages/about/aboutobj";
import Aboutstructure from "./apppages/about/aboutstructure";
import Aboutbb from "./apppages/about/aboutbb";
import Apphousing from "./apppages/services/housing";
import Appproperty from "./apppages/services/property";
import Appcommercial from "./apppages/services/commercial";
import Appsolid from "./apppages/services/solid";
import Appprojects from "./apppages/services/projects";
import Appcontactpage from "./apppages/contactpage";
import Apppolicies from "./apppages/policies";
import AppFooteralt from "./components/footeralt";

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about/profile" element={<Aboutprofile />} />
          <Route path="/about/objectives" element={<Aboutobj />} />
          <Route path="/about/structure" element={<Aboutstructure />} />
          <Route path="/about/board-members" element={<Aboutbb />} />
          <Route path="/services/housing-provision" element={<Apphousing />} />
          <Route
            path="/services/property-real-estate-development"
            element={<Appproperty />}
          />
          <Route
            path="/services/commercial-activities"
            element={<Appcommercial />}
          />
          <Route path="/services/solid-minerals" element={<Appsolid />} />
          <Route
            path="/services/projects-promotion"
            element={<Appprojects />}
          />
          <Route path="/contact" element={<Appcontactpage />} />
          <Route path="/policies" element={<Apppolicies />} />
        </Routes>
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
