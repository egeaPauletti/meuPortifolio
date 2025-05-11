import React, { useEffect, useState } from "react";
import "../../index.css";

interface TypingTextProps {
  textLine1: string;
  textLine2: string;
  speed?: number;
}

const TypingText: React.FC<TypingTextProps> = ({
  textLine1,
  textLine2,
  speed = 70,
}) => {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");

  useEffect(() => {
    let index = 0;
    const maxLength = Math.max(textLine1.length, textLine2.length);

    const type = () => {
      const newLine1 = textLine1.slice(0, index + 1);
      const newLine2 = textLine2.slice(0, index + 1);
      setLine1(newLine1);
      setLine2(newLine2);
      index++;

      if (index < maxLength) {
        setTimeout(type, speed);
      }
    };

    type();
  }, [textLine1, textLine2, speed]);

  return (
    <div className="typing-text-container">
      <span className="flex flex-col typing-text pr-[2%]">
        <span className=" text-[0.7rem] 2xl:text-base secColor">{line1}</span>
        <br />
        <span className="text-xl 2xl:text-3xl">{line2}</span>
      </span>
    </div>
  );
};

export default TypingText;
