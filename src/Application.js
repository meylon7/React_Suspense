import React, { Suspense } from "react";
import { createResource } from "./api/api";
import { Person } from "./components/Person";
import { Num } from "./components/Num";

const resource = createResource();

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>loading num...</h1>}>
        <Num resource={resource} />
      </Suspense>
      <Suspense fallback={<h1>loading person...</h1>}>
        <Person resource={resource} />
      </Suspense>
    </div>
  );
}

export default App;