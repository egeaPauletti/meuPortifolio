import { Link } from "react-router-dom";
//

import TypingText from "./WrittenTitle";

interface DescProps {
  title: string;
  description: string;
}

const ProjectDesc: React.FC<DescProps> = ({ title, description }) => {
  return (
    <>
      <div className="flex flex-col relative -top-5 left-0 2xl:-top-[2%] 2xl:left-[5%] z-100">
        <div>
          <TypingText
            textLine1="Projetos desenvolvidos"
            textLine2={title}
            speed={70}
          />
        </div>
        <div className="flex flex-col gap-5 relative text-[0.7rem] 2xl:text-sm  toTopAnimation underline">
          <p className="max-w-100 2xl:max-w-140  ">{description}</p>
        </div>
        <Link to="/">
          <div className="mt-5 2xl:mt-10 toRightAnimation">
            <button className="btn">Ver Projeto</button>
          </div>
        </Link>
      </div>
    </>
  );
};
export default ProjectDesc;
