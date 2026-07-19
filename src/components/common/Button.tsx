import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    outline:
      "border border-border text-text-primary hover:bg-surface-secondary",
  };

  return (
    <button
      className={`rounded-2xl font-[geo] text-[14px] px-6 py-3 font-medium transition-colors ease-in-out duration-500  cursor-pointer ${
        variants[variant]
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}