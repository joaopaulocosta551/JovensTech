import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Footer } from "./components/Footer";
import { MenuNav } from "./components/MenuNav";
import { CursoPage } from "./paghes/Curso";
import { Form } from "./paghes/Form";
import { Gallery } from "./paghes/Gallery";
import { HomePage } from "./paghes/Home";
import { Imprensa } from "./paghes/Imprensa";
import { NotFound } from "./paghes/NotFound";
import { Questions } from "./paghes/Questions";
import { SucessfulRegistrations } from "./paghes/SuccessfulRegistrations";

function App() {
  return (
    <main>
      {/* <HomePage /> */}
      {/* <CursoPage /> */}
      <Form />   
      {/* <Imprensa /> */}
      {/* <Questions/> */}
      {/* <SucessfulRegistrations/> */}
      {/* <NotFound/> */}
      {/* <Gallery /> */}
    </main>
  );
}
export default App;
