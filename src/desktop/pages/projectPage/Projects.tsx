import { useState } from "react";
import "../../../index.css";
import ProjectDesc from "../../components/ProjectDesc";
import ArrowIcon from "../../components/icons/projects/ArrowIcon";
import "./index.css";

export default function Projects() {
  const projetos: { [key: string]: { title: string; description: string, link: string } } = {
    projeto1: {
      title: "Coding Quest",
      description:
        "A Coding Quest é uma plataforma web gamificada voltada para o ensino de lógica de programação. Desenvolvida para iniciantes e estudantes da área de tecnologia, a plataforma oferece suporte a diversas linguagens e traz uma experiência de aprendizado mais dinâmica por meio de desafios diários, níveis progressivos organizados em mundos e um sistema de pontuação com XP. O objetivo é tornar o processo de aprendizagem mais envolvente, acessível e eficaz, utilizando recursos visuais e mecânicas inspiradas em jogos para estimular o progresso contínuo.",
      link: "https://github.com/egeaPauletti"
    },
    projeto2: {
      title: "Projeto Beta",
      description: "Descrição do Projeto Beta.",
      link: "https://github.com/egeaPauletti"
    },
    projeto3: {
      title: "Projeto Gama",
      description: "Descrição do Projeto Gama.",
      link: "https://github.com/egeaPauletti"
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
  const { title, description, link } = projetos[chaveAtual];

  return (
    <>
      <div className=" flex items-center h-screen relative -top-[15%] left-[10%] 2xl:-top-[20%] 2xl:left-[5%] overflow">
        <div className="z-90 container absolute top-[70%] 2xl:top-[60%] left-[6%] 2xl:left-[7%] testeanima max-sm:top-[150%] max-sm:left-[50%]">
          <div className="card absolute -left-70 2xl:-left-90 codingQuest"></div>
          <div className="card absolute left-20 2xl:left-40"></div>
          <div className="card absolute left-110 2xl:left-170"></div>
          <div className="card absolute left-200 2xl:left-300"></div>
        </div>
        <div key={componentKey} className="">
          <ProjectDesc title={title} description={description} link={link} />
        </div>

        <div className="absolute sm:top-135 2xl:top-240 2xl:left-20 z-100 max-sm:bottom-30">
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
