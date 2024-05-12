import { FC } from "react";
import { CardVariant } from "../types/type";

interface CardProps {
  width?: string;
  height: string;
  variant?: CardVariant;
  children: React.ReactNode;
}

const Card: FC<CardProps> = ({ width, height, children, variant }) => {
  return (
    <div
      style={{
        width,
        height,
        background: variant === CardVariant.primary ? "blue" : "",
        border: variant === CardVariant.outlined ? "1px solid red" : "none",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
