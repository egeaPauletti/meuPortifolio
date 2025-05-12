import { useState } from "react";
import "./index.css";
import "../../../index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProjectDesc from "../../components/ProjectDesc";
import ArrowIcon from "../../components/icons/projects/ArrowIcon";

export default function Projects() {
  const projetos: { [key: string]: { title: string; description: string } } = {
    projeto1: {
      title: "Coding Quest",
      description:
        "A Coding Quest é uma plataforma web gamificada voltada para o ensino de lógica de programação. Desenvolvida para iniciantes e estudantes da área de tecnologia, a plataforma oferece suporte a diversas linguagens e traz uma experiência de aprendizado mais dinâmica por meio de desafios diários, níveis progressivos organizados em mundos e um sistema de pontuação com XP. O objetivo é tornar o processo de aprendizagem mais envolvente, acessível e eficaz, utilizando recursos visuais e mecânicas inspiradas em jogos para estimular o progresso contínuo.",
    },
    projeto2: {
      title: "Projeto Beta",
      description: "Descrição do Projeto Beta.",
    },
    projeto3: {
      title: "Projeto Gama",
      description: "Descrição do Projeto Gama.",
    },
  };

  const chaves = Object.keys(projetos);
  const [indexAtual, setIndexAtual] = useState(0);
  const [componentKey, setComponentKey] = useState(0); // Key para forçar recarregamento

  const handleNext = () => {
    setIndexAtual((prev) => {
      const novo = (prev + 1) % chaves.length;
      setComponentKey((k) => k + 1); // Força o React a remontar o componente
      return novo;
    });
  };

  const handlePrevious = () => {
    setIndexAtual((prev) => {
      const novo = (prev - 1 + chaves.length) % chaves.length;
      setComponentKey((k) => k + 1); // Força o React a remontar o componente
      return novo;
    });
  };

  const chaveAtual = chaves[indexAtual];
  const { title, description } = projetos[chaveAtual];

  return (
    <>
      <div
        // Isso força o React a "recriar" essa árvore DOM
        className="flex items-center h-screen relative -top-[15%] left-[10%] 2xl:-top-[20%] 2xl:left-[5%]"
      >
        <div className="container absolute top-[60%] 2xl:top-[60%] left-[6%] 2xl:left-[7%] testeanima">
          <div className="card absolute -left-70 2xl:-left-90 codingQuest"></div>
          <div className="card absolute left-20 2xl:left-40"></div>
          <div className="card absolute left-110 2xl:left-170"></div>
          <div className="card absolute left-200 2xl:left-300"></div>
        </div>
        <div key={componentKey}>
          <ProjectDesc title={title} description={description} />
        </div>

        <div className="absolute top-135 2xl:top-240 2xl:left-20">
          <div className="hidden 2xl:flex gap-8">
            <button className="espelhado arrow" onClick={handlePrevious}>
              <ArrowIcon size={30} />
            </button>
            <button className="arrow" onClick={handleNext}>
              <ArrowIcon size={30} />
            </button>
          </div>
          <div className="flex 2xl:hidden gap-5">
            <button className="espelhado arrow" onClick={handlePrevious}>
              <ArrowIcon size={20} />
            </button>
            <button className="arrow" onClick={handleNext}>
              <ArrowIcon size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
