import { useEffect, useState } from "react";
import ProgressBar from "../components/ProgresBar";
import TypingTerminal from "../components/WrittenTerminal";
import CircleIcon from "./icons/preLoader/circleIcon";

const ChainedTerminalSpans = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const interval = 1700;

  useEffect(() => {
    if (visibleIndex < 6) {
      const timer = setTimeout(() => {
        setVisibleIndex((prev) => prev + 1);
      }, interval);
      return () => clearTimeout(timer);
    }
  }, [visibleIndex]);

  return (
    <div className="loading-page flex items-center justify-center min-h-screen px-4 sm:px-6">
      <div className="w-full max-w-2xl">
        {/* Top Bar */}
        <div className="flex flex-wrap gap-5 mb-2.5 text-sm sm:text-base">
          <div className="flex gap-2">
            <CircleIcon size={15} />
            <CircleIcon size={15} />
            <CircleIcon size={15} />
          </div>
          <span className="truncate">~/portifolio-terminal</span>
        </div>

        {/* Terminal Box */}
        <div className="flex flex-col w-full bg-[#2e2e2e] p-4 sm:p-6 rounded-lg shadow-md text-[0.75rem] sm:text-[0.85rem] overflow-hidden">
          {/* Initial Terminal Text */}
          <div className="flex flex-col mb-2">
            <span className="secColor">Terminal Portifolio v1.0.0</span>
            <span className="priColor opacity-50">
              Digite seu nome para continuar...
            </span>
          </div>

          {/* Conditionally rendered spans */}
          {visibleIndex >= 1 && (
            <span>
              <TypingTerminal text="Gabriel Pauletti Egea" />
            </span>
          )}

          {visibleIndex >= 2 && (
            <div className="flex flex-col text-[0.8rem]">
              <span className="priColor">
                Olá, <span className="secColor">Gabriel Pauletti Egea</span>!!! Carregando portifólio...
              </span>
            </div>
          )}

          {visibleIndex >= 3 && (
            <span>
              <TypingTerminal text="npm run dev" />
            </span>
          )}

          {visibleIndex >= 4 && (
            <div className="flex flex-col gap-5 mt-2">
              <span className="priColor opacity-50">Inicializando portifólio...</span>
              <ProgressBar />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChainedTerminalSpans;
