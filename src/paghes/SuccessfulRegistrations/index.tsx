import { Footer } from "@/components/Footer";
import { MenuNav } from "@/components/MenuNav";
import { Paragraph } from "@/components/Typography/Paragraph";
import { SubTitle } from "@/components/Typography/SubTitle";
import { SectionCardGradiente } from "./SectionCardGradiente";
import { SectionRegistrations } from "./styles";

export const SucessfulRegistrations = () => {
  return (
    <SectionRegistrations>
      <MenuNav />
      <div style={{marginTop: "6.25rem"}}>
        <SubTitle>Incrição realizada com sucesso!</SubTitle>
        <Paragraph>
          Parabéns, você acaba de entrar para a lista de seleção do projeto
          Jovens Tech! Em breve entraremos em contato por e-mail!
        </Paragraph>
      </div>
      <SectionCardGradiente/>
      <Footer />
    </SectionRegistrations>
  );
};
