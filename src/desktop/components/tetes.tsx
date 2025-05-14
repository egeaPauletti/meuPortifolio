import "../../index.css";
import TypingTerminal from "./WrittenTerminal";

export default function PreLoader() {
  return (
    <>
      <div className="loading-page">
        <div className="w-200 h-100 thirdColor flex flex-col gap-5 bg-[#3a3a3a] p-10">
          <div className="flex flex-col">
            <span className="secColor">Terminal Portifolio v1.0.0</span>
            <span className="priColor">Digite seu nome para continuar...</span>
          </div>
          <span>
            <TypingTerminal text="Gabriel Pauletti Egea" />
          </span>
          <span className="priColor">
            Olá, Gabriel Pauletti Egea!! Carregando portifólio...
          </span>
          <span>
            <TypingTerminal text="npm run dev" />
          </span>
          <span className="priColor">Carregando assets do portifólio...</span>
        </div>
      </div>
    </>
  );
}
