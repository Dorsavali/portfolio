import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`mx-auto w-full lg:max-w-[1500px]  ${className}`}>
      {children}
    </div>
  );
}
export default Container;