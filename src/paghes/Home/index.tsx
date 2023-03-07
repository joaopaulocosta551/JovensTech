import { SectionContainer } from "./styles";
import { Title } from "../../components/Typography/Title";
import { Paragraph } from "../../components/Typography/Paragraph";
import { PrimaryButton } from "../../components/PrimaryButton";
import { SectionCards } from "./SectionCards";
import { SectionSlider } from "./SectionSlider";
import { SctionInscrition } from "./SectionInscrition";
import { SectionVideo } from "./SectionVideo";

export const HomePage = () => {
  return (
    <>
      <SectionContainer>
        <Title value="">
          &lt;Faça parte da nossa rede de Jovens Tech!/&gt;
        </Title>
        <Paragraph>
        Uma iniciativa de transformação social que busca conectar jovens ao
        mercado de tecnologia por meio da educação!
        </Paragraph>
        <PrimaryButton value="Inscreva-se"/>
       <SectionVideo />
       
        <SectionCards />
        <SectionSlider />
        <SctionInscrition />
      </SectionContainer>
    </>
  );
};
