import "./index.css";
//
import { Link } from "react-router-dom";
//
import CursorIcon from "../../components/icons/home/CursorIcon";

export default function Home() {
  return (
    <>
      <div className="flex items-center h-[75vh] relative -top-[10%] left-[10%] 2xl:-top-[15%] 2xl:left-[5%]">
        <div className="flex flex-col w-max gap-2.5 z-100  underline toRightAnimation pb-5">
          <span className="text-sm 2xl:text-base">
            desenvolvedor de software
          </span>
          <div className="flex flex-col">
            <div>
              <span className="text-xl 2xl:text-3xl rocknroll">pauletti</span>
              <span className="text-xl 2xl:text-3xl rocknroll secColor">
                {".dev( )"}
              </span>
            </div>
            <span className="firaCode text-sm 2xl:text-base">
              Gabriel Pauletti Egea
            </span>
          </div>
          <span className="text-3xl 2xl:text-5xl  font-bold">
            Transformando <span className="secColor">ideias</span>
            <br /> <span className="secColor"> e projetos </span>em realidade!
          </span>
        </div>

        <Link to="/sobre">
          <div className="absolute top-[35%] left-[40%] 2xl:left-[45%]  toBottomAnimation translateHover">
            <div className="relative -top-2.5 -left-6">
              <CursorIcon size={20} color="second" />
            </div>
            <span className="bgSecColor text-[0.7rem] p-2 rounded-lg 2xl:text-base  2xl:p-3  thirdColor font-bold">
              Oi, eu sou Gabriel
            </span>
          </div>
        </Link>
        <Link to="/sobre">
          <div className="absolute top-[85%] left-[10%] 2xl:top-[85%] 2xl:left-[10%] toTopAnimation2 translateHover">
            <div className="relative -top-2.5 left-6 espelhado">
              <CursorIcon size={20} color="primary" />
            </div>
            <span className="bgPriColor text-[0.7rem] p-2 rounded-lg 2xl:text-base  2xl:p-3  thirdColor font-bold">
              Um desenvolvedor de software
            </span>
          </div>
        </Link>
      </div>
    </>
  );
}
