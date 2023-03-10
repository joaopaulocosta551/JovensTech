import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Footer } from "./components/Footer";
import { MenuNav } from "./components/MenuNav";
import { CursoPage } from "./paghes/Curso";
import { Form } from "./paghes/Form";
import { HomePage } from "./paghes/Home";
import { Imprensa } from "./paghes/Imprensa";
import { Questions } from "./paghes/Questions";

function App() {
  return (
    <main>
      {/* <HomePage /> */}
      {/* <CursoPage /> */}
      {/* <Form /> */}
      {/* <Imprensa /> */}
      <Questions/>
    </main>
  );
}
export default App;
