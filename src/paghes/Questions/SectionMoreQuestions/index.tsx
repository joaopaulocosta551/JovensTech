import { SectionQuestions, Whiteline } from "./styles";
import { DivContent } from "./styles";

export const SectionMoreQuestions = () => {
  return (
    <SectionQuestions>
      <DivContent>
        <h2 style={{ fontSize: "1.75rem", marginTop: "2.5rem" }}>Até quando vão as inscrições?</h2>
        <p style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.5)" }}>
        As inscrições para a primeira turma já foram finalizadas! Mas você pode estar efetuando seu cadastro para nossa lista de espera das próximas turmas que virão!! Corre lá
        </p>
        <Whiteline/>
      </DivContent>
      <DivContent>
        <h2 style={{ fontSize: "1.75rem", marginTop: "2.5rem" }}>Qual a idade dos participantes do projeto?</h2>
        <p style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.5)" }}>
        Os participantes do projeto devem ter de 16 a 24 anos de idade para serem selecionados para o grupo de alunos.
        </p>
        <Whiteline/>
      </DivContent>
      <DivContent>
        <h2 style={{ fontSize: "1.75rem", marginTop: "2.5rem" }}>
        Onde serão as aulas?
        </h2>
        <p style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.5)" }}>
        As aulas vão acontecer aos sábados, presencialmente, no laboratório de informática da Universidade Anhembi Morumbi de Piracicaba
        </p>
        <Whiteline/>
      </DivContent>

      <DivContent />
    </SectionQuestions>
  );
};
