import { Footer } from "@/components/Footer";
import { MenuNav } from "@/components/MenuNav";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";
import { Paragraph } from "@/components/Typography/Paragraph";
import { SubTitle } from "@/components/Typography/SubTitle";
import { Title } from "@/components/Typography/Title";
import { BoxHero } from "../Curso/SectionHero/style";
import { SctionInscrition } from "./SectionInscrition";
import { SectionImprensa } from "./style";

export const Imprensa = () => {
  return (
    <SectionImprensa>
      <MenuNav />
        <div style={{marginTop: '5.5rem',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: "center"}}>
        </div>
        <div>
        <SubTitle>Vamos compartilhar?</SubTitle>
        <Paragraph>
            Quer saber como pode compartilhar sobre o projeto, ou mesmo fazer parte
            da rede de parceiros? Confira as informaçãos abaixo:
        </Paragraph>
        </div>
      
      <SctionInscrition />
      <Footer />
    </SectionImprensa>
  );
};
