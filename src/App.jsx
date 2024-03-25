import "bootstrap/dist/css/bootstrap.min.css";
import '../public/assets/css/global.css';
import '../public/assets/css/style.css';
import '../public/assets/css/header.css';
import '../public/assets/css/responsive.css';
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import Footer from "./components/Footer";
import AboutPage from "./page/AboutPage";
import ServicePage from "./page/ServicePage";
import ContactPage from "./page/ContactPage";

function App() {
  return (
    <div className="app-con">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage/>} />
          <Route path="/contact-us" element={<ContactPage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
