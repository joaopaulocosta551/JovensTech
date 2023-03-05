import { SectionContainer, SocialLink, VideoSection } from "./styles";
import { Title } from "../../components/Typography/Title";
import { Paragraph } from "../../components/Typography/Paragraph";
import { PrimaryButton } from "../../components/PrimaryButton";
import { BsInstagram } from 'react-icons/bs'
import { SubTitle } from "../../components/Typography/SubTitle";
import { SectionCards } from "./SectionCards";
import { SectionSlider } from "./SectionSlider";
import { SctionInscrition } from "./SectionInscrition";

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
        <VideoSection>
            <iframe width="100%" height="100%" style={{borderRadius: '8px'}} src="https://www.youtube.com/embed/E7OUJCCfN4I" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </VideoSection>
        <SocialLink>
            <BsInstagram />
            <p>@jovenstechpira</p>
        </SocialLink>
        <SectionCards />
        <SectionSlider />
        <SctionInscrition />
      </SectionContainer>
    </>
  );
};
