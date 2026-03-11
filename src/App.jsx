
import "./App.css";
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Resumegenerator from  "./pages/Resumegenerator";
import Pforms from "./pages/Pforms";
import History from "./pages/History";
import Pnf from "./pages/Pnf";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/resume-generator" element={<Resumegenerator />} />
        <Route path="/pforms" element={<Pforms />} />
        <Route path="/history" element={<History />} />
        <Route path="/*" element={<Pnf />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
