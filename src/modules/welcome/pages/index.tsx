import { Cards } from "@welcome/components/Cards/indes";
import { Suspense } from "react";

function Welcome() {
  return (
    <div className="h-screen flex items-center justify-center w-full flex-col gap-10 bg-black text-white">
      <div className="max-w-5xl w-full">
        <h1 className="text-lg font-semibold">Features</h1>
      </div>

      <Suspense fallback={<Cards.Placeholder />}>
        <Cards />
      </Suspense>
    </div>
  );
}

export default Welcome;
