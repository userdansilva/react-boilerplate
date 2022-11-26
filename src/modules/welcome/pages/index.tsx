import { Cards } from "@welcome/components/Cards";
import clsx from "clsx";
import { ReactNode, Suspense } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => (
  <div className={clsx("max-w-5xl w-full", className)}>
    {children}
  </div>
);

interface HeadingProps {
  children: ReactNode;
}

const Heading = ({ children }: HeadingProps) => (
  <h1 className="text-3xl font-semibold text-opacity-20 text-white">
    {children}
  </h1>
);

interface LibProps {
  children: ReactNode;
}

const Lib = ({ children }: LibProps) => (
  <div className="text-white opacity-80 border-b-2 border-amber-600">
    {children}
  </div>
);

function Welcome() {
  return (
    <div className="scroll-dark h-screen overflow-auto">
      <div
        className={`
        flex items-center justify-center w-full flex-col gap-10 
        bg-black text-white py-16
      `}
      >
        <Container className="space-y-10">
          <Heading>
            Features
          </Heading>

          <Suspense fallback={<Cards.Placeholder />}>
            <Cards />
          </Suspense>
        </Container>

        <Container className="space-y-10">
          <Heading>
            Main Libs
          </Heading>

          <div className="flex gap-4">
            <Lib>storybook</Lib>
            <Lib>axios</Lib>
            <Lib>clsx</Lib>
            <Lib>react-error-boundary</Lib>
            <Lib>react-hook-form</Lib>
            <Lib>react-router-dom</Lib>
            <Lib>swr</Lib>
            <Lib>eslint</Lib>
            <Lib>msw</Lib>
            <Lib>tailwindcss</Lib>
            <Lib>vitest</Lib>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Welcome;
