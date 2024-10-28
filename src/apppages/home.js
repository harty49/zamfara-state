import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/App.css";
// import AppHeader from "../components/header";
import AppHero from "../components/hero";
import Appmsc from "../components/msc";
import Appownership from "../components/ownership";
import Appaoo from "../components/aoo";
import Appgrid from "../components/grid";
import Apppartner from "../components/partner";
import AppContact from "../components/contact";
// import AppAbout from "../components/about";
// import AppServices from "../components/services";
// import AppStrategy from "../components/strategy";
// import AppLicense from "../components/license";
// // import AppStandards from "./components/standards";
// import FAQs from "../components/faqs/FAQs";
// import AppContact from "../components/contact";
// import AppFooter from "../components/footer";

function Home() {
  return (
    <div className="Home">
      <main>
        <AppHero />
        <Appmsc />
        <Appownership />
        <Appaoo />
        <Appgrid />
        <Apppartner />
        <AppContact />
      </main>
    </div>
  );
}

export default Home;
