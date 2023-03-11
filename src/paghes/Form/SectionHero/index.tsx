import { InputForm } from "@/components/InputForm";
import { SubTitleH3 } from "@/components/Typography/SubTitleH3";
import { Paragraph } from "../../../components/Typography/Paragraph";
import { BoxHero, DivRowInput } from "./styles";

export const SectionHero = () => {
  return (
    <BoxHero>
      <SubTitleH3>Increva-se no Jovens Tech</SubTitleH3>
      <Paragraph>
      Esse é o primeiro passo que você vai dar para alavancar sua carreira.
      </Paragraph>
        <form style={{marginTop: '5.5rem'}}>
      <DivRowInput>
          <InputForm label="Nome completo" placeholder="Nome" type="text" />
          <InputForm label="Data de nascimento" placeholder="dd/mm/aa" type="text" />
          <InputForm label="CPF" placeholder="999.999.999-99" mask="CPF" type={""} />
      </DivRowInput>
        </form>
    </BoxHero>
  );
};
