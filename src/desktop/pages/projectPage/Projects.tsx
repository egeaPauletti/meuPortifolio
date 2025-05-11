import "./index.css";
import "../../../index.css";
//

import { Link } from "react-router-dom";
//
import TypingText from "../../components/WrittenTitle";
export default function Projects() {
  return (
    <>
      <div className="flex items-center h-screen relative -top-[15%] left-[10%] 2xl:-top-[20%] 2xl:left-[5%] ">
        <div className="container absolute top-[60%] left-[10%] testeanima">
          <div className="card absolute -left-90"></div>
          <div className="card absolute left-40"></div>
          <div className="card absolute left-170"></div>
          <div className="card absolute left-300"></div>
        </div>
        <div className="flex flex-col relative -top-0 left-0 2xl:-top-[2%] 2xl:left-[5%] z-100">
          <div>
            <TypingText
              textLine1="Projetos"
              textLine2="Coding Quest"
              speed={70}
            />
          </div>
          <div className="flex flex-col gap-5 relative text-[0.7rem] 2xl:text-sm toTopAnimation underline">
            <p className="max-w-100 2xl:max-w-140  ">
              A Coding Quest é uma plataforma web gamificada voltada para o
              ensino de lógica de programação. Desenvolvida para iniciantes e
              estudantes da área de tecnologia, a plataforma oferece suporte a
              diversas linguagens e traz uma experiência de aprendizado mais
              dinâmica por meio de desafios diários, níveis progressivos
              organizados em mundos e um sistema de pontuação com XP. O objetivo
              é tornar o processo de aprendizagem mais envolvente, acessível e
              eficaz, utilizando recursos visuais e mecânicas inspiradas em
              jogos para estimular o progresso contínuo
            </p>
          </div>
          <Link to="/">
            <div className="mt-5 2xl:mt-10 toRightAnimation">
              <button className="btn">Ver Projeto</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
