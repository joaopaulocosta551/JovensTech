import { SubTitleH3 } from "@/components/Typography/SubTitleH3";
import { SubTitleH4 } from "@/components/Typography/SubTitleH4";
import { PrimaryButton } from "../../../components/PrimaryButton";
import { Paragraph } from "../../../components/Typography/Paragraph";
import { BoxHero } from "./style";

export const SectionHero = () => {
  return (
    <BoxHero>
      <SubTitleH3>Curso de desenvolvimento de front-end</SubTitleH3>
      <SubTitleH4>Aplicativos (Android)</SubTitleH4>
      <br />
      <Paragraph>
        É aqui que você começa a sua jornada para se tornar o desenvolverdor do
        futuro, vem aprender com a gente!
      </Paragraph>
      <PrimaryButton value="Inscreve-se"/>
    </BoxHero>
  );
};
