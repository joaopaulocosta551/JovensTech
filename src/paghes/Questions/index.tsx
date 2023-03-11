import { Footer } from "@/components/Footer";
import { MenuNav } from "@/components/MenuNav";
import { Paragraph } from "@/components/Typography/Paragraph";
import { SubTitle } from "@/components/Typography/SubTitle";
import { SectionMoreQuestions } from "./SectionMoreQuestions";
import { SectionQuestions } from "./styles";

export const Questions = () => {
  return (
    <>
    <SectionQuestions>
      <MenuNav />
      <div
        style={{
          marginTop: "5.5rem",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      ></div>
      <div>
        <SubTitle>Quais são suas dúvidas</SubTitle>
        <Paragraph>
        Aqui você fica por dentro das principais dúvidas da galera 
        </Paragraph>
      </div>
      <div>
      <SectionQuestions/>
      </div>
    <SectionMoreQuestions/>
    </SectionQuestions>
      <Footer/>
    </>
  );
};
