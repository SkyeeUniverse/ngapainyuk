import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { children, type = "button", onClick, className } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-lg px-3 py-2 bg-blue-500 text-white font-semibold cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
