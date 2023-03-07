import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Footer } from "./components/Footer";
import { MenuNav } from "./components/MenuNav";
import { CursoPage } from "./paghes/Curso";
import { HomePage } from "./paghes/Home";

function App() {
  return (
    <main>
      {/* <HomePage /> */}
      <CursoPage />
    </main>
  );
}
export default App;
