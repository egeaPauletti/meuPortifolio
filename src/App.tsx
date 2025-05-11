import "../src/index.css";
//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
//
import PreLoader from "./desktop/components/PreLoader";
import Home from "./desktop/pages/Home";
import NavBar from "./desktop/components/NavBar";
import MediaBar from "./desktop/components/MediaBar";
import LogoWithTitle from "./desktop/components/LogoWithTitle";

function renderLoader() {
  return <PreLoader />;
}

function renderApp() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-[92.5%] h-[92.5%]">
          <LogoWithTitle />
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<></>} />
              <Route path="/hard" element={<></>} />
              <Route path="/soft" element={<></>} />
              <Route path="/projetos" element={<></>} />
              <Route path="/contato" element={<></>} />
            </Routes>

            <NavBar />
            <MediaBar />
          </Router>
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
      setPreLoaderAtivo(false); //4 segundos
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  return <div>{preLoaderAtivo ? renderLoader() : renderApp()} </div>;
}

export default App;
