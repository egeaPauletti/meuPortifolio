import React, { useEffect, useState } from "react";
import "../../index.css";

interface TypingTextProps {
  text: string;
  speed?: number;
  onDone?: () => void; // <- nova prop
}

const TypingTerminal: React.FC<TypingTextProps> = ({
  text,
  speed = 70,
  onDone,
}) => {
  const [line1, setLine1] = useState("");

  useEffect(() => {
    let index = 0;
    const maxLength = text.length;

    const type = () => {
      const newLine1 = text.slice(0, index + 1);
      setLine1(newLine1);
      index++;

      if (index < maxLength) {
        setTimeout(type, speed);
      } else if (onDone) {
        onDone(); // <- chama quando terminar
      }
    };

    type();
  }, [text, speed, onDone]);

  return (
    <div className="typing-text-container">
      <span className="flex flex-col  pr-[2%]">
        <span className="flex items-center gap-2.5 text-[0.7rem] 2xl:text-base">
          <span className="secColor text-[1.5rem]">$</span>
          {line1}
        </span>
      </span>
    </div>
  );
};

export default TypingTerminal;
