import "bootstrap/dist/css/bootstrap.min.css";
import '../public/assets/css/global.css';
import '../public/assets/css/style.css';
import '../public/assets/css/header.css';
import '../public/assets/css/responsive.css';
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-con">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
