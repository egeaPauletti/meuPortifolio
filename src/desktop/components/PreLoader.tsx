import { useEffect, useState } from "react";
import TypingTerminal from "../components/WrittenTerminal"; // ajuste o caminho conforme necessário
import ProgressBar from "../components/ProgresBar";
import CircleIcon from "./icons/preLoader/circleIcon";

const ChainedTerminalSpans = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const interval = 1700; // tempo entre os blocos (ms)

  useEffect(() => {
    if (visibleIndex < 6) {
      const timer = setTimeout(() => {
        setVisibleIndex((prev) => prev + 1);
      }, interval);
      return () => clearTimeout(timer);
    }
  }, [visibleIndex]);

  return (
    <div className="loading-page">
      <div>
        <div className="flex gap-5 mb-2.5">
          <div className="flex gap-2">
            <CircleIcon size={15} />
            <CircleIcon size={15} />
            <CircleIcon size={15} />
          </div>
          <span>~/portifolio-terminal</span>
        </div>
        <div className="flex flex-col w-170 h-80 thirdColor  bg-[#2e2e2e] p-[5%] rounded-lg shadow-[#202020] text-[0.8rem]">
          <div className="flex flex-col">
            <span className="secColor">Terminal Portifolio v1.0.0</span>
            <span className="priColor opacity-50">
              Digite seu nome para continuar...
            </span>
          </div>

          {visibleIndex >= 1 && (
            <span>
              <TypingTerminal text="Gabriel Pauletti Egea" />
            </span>
          )}

          {visibleIndex >= 2 && (
            <div className="flex flex-col text-[0.8rem]">
              <span className="priColor">
                Olá, <span className="secColor">Gabriel Pauletti Egea</span>!!!
                Carregando portifólio...
              </span>
            </div>
          )}

          {visibleIndex >= 3 && (
            <span>
              <TypingTerminal text="npm run dev" />
            </span>
          )}

          {visibleIndex >= 4 && (
            <div className="flex flex-col gap-5">
              <span className="priColor opacity-50">
                Inicializando portifólio...
              </span>
              <ProgressBar />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChainedTerminalSpans;
