import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";

function App() {
  return (
    <div className="app-con">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
