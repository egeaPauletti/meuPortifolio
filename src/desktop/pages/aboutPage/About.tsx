import "./index.css";
//
import { Link } from "react-router-dom";
//
import BasketBollIcon from "../../components/icons/about/BasketBollIcon";
import BookIcon from "../../components/icons/about/BookIcon";
import CodeIcon from "../../components/icons/about/CodeIcon";
import GameControlIcon from "../../components/icons/about/GameControlIcon";
import MathIcon from "../../components/icons/about/MathIcon";
import MineIcon from "../../components/icons/about/MineIcon";
import TypingText from "../../components/WrittenTitle";

export default function About() {
  return (
    <>
      <div className="flex items-center h-[75vh] relative -top-[5%] left-[10%] 2xl:-top-[15%] 2xl:left-[5%]">
        <div className="flex flex-col relative left-0 top-[10%] 2xl:left-[5%]">
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

        {/* 2xl Screen */}
        <div className=" hidden 2xl:flex relative left-[25%]">
          <div className="relative top-20 -left-45 rotate-45 toBottomAnimation7s translateHover">
            <GameControlIcon size={100} />
          </div>
          <div className="relative left-20 -top-20 rotate-45 toBottomAnimation6s translateHover">
            <CodeIcon size={80} />
          </div>
          <div className="relative top-40  -left-20 -rotate-25 toBottomAnimation5s translateHover">
            <BasketBollIcon size={60} />
          </div>
          <div className="relative  top-20 left-40 -rotate-45 toBottomAnimation4s translateHover">
            <MathIcon size={40} />
          </div>
          <div className="relative  top-90 -left-70 -rotate-25 toBottomAnimation3s translateHover">
            <MineIcon size={50} />
          </div>
          <div className="relative  top-95 -left-10 -rotate-25 toBottomAnimation2s translateHover">
            <BookIcon size={100} />
          </div>
        </div>
        {/* xl Screen */}
        <div className="flex 2xl:hidden relative left-[25%]">
          <div className="relative top-0 -left-45 rotate-45 toBottomAnimation7s translateHover">
            <GameControlIcon size={70} />
          </div>
          <div className="relative -left-10 -top-15 rotate-45 toBottomAnimation6s translateHover">
            <CodeIcon size={50} />
          </div>
          <div className="relative top-20 -left-25 -rotate-25 toBottomAnimation5s translateHover">
            <BasketBollIcon size={30} />
          </div>
          <div className="relative  left-10 -rotate-45 toBottomAnimation4s translateHover">
            <MathIcon size={20} />
          </div>
          <div className="relative  top-40 -left-60 -rotate-25 toBottomAnimation3s translateHover">
            <MineIcon size={20} />
          </div>
          <div className="relative  top-40 -left-10 -rotate-25 toBottomAnimation2s translateHover">
            <BookIcon size={70} />
          </div>
        </div>
      </div>
    </>
  );
}
