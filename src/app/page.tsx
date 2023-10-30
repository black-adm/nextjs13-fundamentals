import { Suspense } from "react";

import { LongWaitComponent } from "./components/long-wait-component";
import { GithubProfile } from "./components/github-profile";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4">
      <h1 className="mt-20 pb-4 text-2xl font-semibold">
        🏠 Home
      </h1>

      <Suspense
        fallback={<p>⏳ Carregando LongWaitComponent</p>}
      >
        <LongWaitComponent />
      </Suspense>

      <Suspense
        fallback={<p>⏳ Carregando GithubProfile</p>}
      >
        <GithubProfile />
      </Suspense>
    </div>
  )
}
