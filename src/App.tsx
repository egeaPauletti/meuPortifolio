import "../src/index.css";
//
import { BrowserRouter as Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
//
import PreLoader from "./desktop/components/PreLoader";
import NavBar from "./desktop/components/NavBar";
import MediaBar from "./desktop/components/MediaBar";
import LogoWithTitle from "./desktop/components/LogoWithTitle";
import Home from "./desktop/pages/homePage/Home";
import About from "./desktop/pages/aboutPage/About";
import Projects from "./desktop/pages/projectPage/Projects";
import HardSkills from "./desktop/pages/hardPage/HardSkills";
import Contact from "./desktop/pages/contactPage/Contact";

function renderLoader() {
  return <PreLoader />;
}

function renderApp() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-[92.5%] h-[92.5%]">
          <LogoWithTitle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/hard" element={<HardSkills />} />
            <Route path="/soft" element={<></>} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
          <NavBar />
          <MediaBar />
          <div className="bgSecColor w-[5%] h-[0.2rem] absolute bottom-11"></div>
          <div className="bgSecColor w-[5%] h-[0.2rem] absolute top-11 right-[10%]"></div>
          <div className="bgSecColor w-[5%] h-[0.2rem] absolute top-11 right-[17%]"></div>
        </div>
      </div>
    </>
  );
}

function App() {
  const [preLoaderAtivo, setPreLoaderAtivo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreLoaderAtivo(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);
  return <div>{preLoaderAtivo ? renderLoader() : renderApp()} </div>;
}

export default App;
