import "./index.css";
//
import { Link } from "react-router-dom";
//
import TypingText from "../../components/WrittenTitle";

export default function About() {
  return (
    <>
      <div className="flex items-center h-[75vh] relative -top-[5%] left-[10%] 2xl:-top-[15%] 2xl:left-[5%]">
        <div className="flex flex-col relative left-0 top-[15%] 2xlleft-[0] ">
          <div>
            <TypingText
              textLine1="Sobre mim"
              textLine2="Gabriel Pauletti Egea"
              speed={70}
            />
          </div>
          <div className="flex flex-col gap-5 relative text-[0.7rem] 2xl:text-sm toTopAnimation underline">
            <p className="max-w-100 2xl:max-w-140  ">
              Meu nome é Gabriel e sou apaixonado por tecnologia. Desde pequeno,
              sempre gostei de videogames e computadores, e com o tempo cresceu
              minha curiosidade sobre como eram desenvolvidos os jogos,
              programas e sites que eu usava. Fiz um curso de banco de dados e
              softwares que despertou ainda mais meu interesse pela área. Mais
              tarde, comecei a estudar desenvolvimento web pela plataforma
              Alura, área com a qual me identifiquei de imediato.
            </p>
            <p className="max-w-100 2xl:max-w-140 ">
              Após concluir o Ensino Médio, iniciei a faculdade de Análise e
              Desenvolvimento de Sistemas, o que confirmou minha escolha
              profissional. Tenho interesse em explorar diversas áreas da
              programação, como desenvolvimento web e mobile, automações e
              segurança, entre outros.
            </p>
            <p className="max-w-90 2xl:max-w-150 text-justify"></p>
          </div>
          <Link to="/contato">
            <div className="mt-5 2xl:mt-10 toTopAnimation2">
              <button className="btn">Contato</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
