import React from "react";
import "./Button.scss";

interface ButtonProps {
  text: string | number;
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={`button ${props.className}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.text}
    </button>
  );
};

export { Button };
