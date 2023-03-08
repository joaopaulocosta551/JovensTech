import { InputForm } from "@/components/InputForm";
import { SubTitleH3 } from "@/components/Typography/SubTitleH3";
import { Paragraph } from "../../../components/Typography/Paragraph";
import { BoxHero } from "./style";

export const SectionHero = () => {
  return (
    <BoxHero>
      <SubTitleH3>Increva-se no Jovens Tech</SubTitleH3>
      <Paragraph>
      Esse é o primeiro passo que você vai dar para alavancar sua carreira.
      </Paragraph>
      <form style={{marginTop: '5.5rem'}}>
        <InputForm label="Nome completo" placeholder="Nome" type="text" />
      </form>
    </BoxHero>
  );
};
