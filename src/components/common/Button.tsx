import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
}

export default function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    outline: "border border-border bg-transparent text-text-primary hover:border-primary hover:bg-surface-secondary",
  };

  return (
    <button className={`cursor-pointer rounded-2xl px-6 py-3 font-[geo] text-[14px] font-medium transition-colors duration-700 ease-in-out ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}