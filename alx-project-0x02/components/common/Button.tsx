// components/common/Button.tsx
import React from "react";

export interface SimpleButtonProps {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<SimpleButtonProps> = ({
  title,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
