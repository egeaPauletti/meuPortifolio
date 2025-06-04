// HardItem.tsx
import React from "react";
import styled from "styled-components";

interface itemProps {
  color: string;
  component: React.ComponentType;
  text: string;
}

const StyledFigure = styled.figure<{ beforeColor: string }>`
  &::before {
    background-color: ${(props) => props.beforeColor};
  }
`;

const HardItem: React.FC<itemProps> = ({
  color,
  text,
  component: LogoComponent,
}) => {
  return (
    <StyledFigure beforeColor={color} className="hardItem">
      <figure className="flex gap-1.5 items-center justify-start">
        <div className="z-100">
          <LogoComponent />
        </div>
        <span className="text-xs 2xl:text-base">{text}</span>
      </figure>
    </StyledFigure>
  );
};

export default HardItem;
