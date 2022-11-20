import { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
}

function Card({ title, children }: CardProps) {
  return (
    <div className={`
      bg-white bg-opacity-5 p-8 rounded-md flex flex-col gap-3 border-b-2 border-amber-600 border-opacity-20
      shadow-[0_0_60px_-15px_rgba(217,119,6,0.1)]
    `}
    >
      <h2 className="text-amber-600 font-semibold text-base">
        {title}
      </h2>

      <p className="text-opacity-70 text-white">
        {children}
      </p>
    </div>
  );
}

export { Card };
