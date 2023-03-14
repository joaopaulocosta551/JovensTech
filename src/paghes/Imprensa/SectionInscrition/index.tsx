import { SubTitle } from "../../../components/Typography/SubTitle";
import {
  CardIncrition,
  DivImg,
  DivGradientText,
  DivSolidColor,
  DivContenteTextButton,
  TextSolidColor,
  Border,
} from "./styles";
import Photo from "../../../assets/imgDecoration/Photo.png";
import Peoples from "@/assets/imgDecoration/pessoas.png";
import { Paragraph } from "../../../components/Typography/Paragraph";
import { PrimaryButton } from "../../../components/PrimaryButton";
import { SubTitleH3 } from "@/components/Typography/SubTitleH3";
import { Title } from "@/components/Typography/Title";

export const SctionInscrition = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "11.25rem",
        marginBottom: '11.87rem',
      }}
    >
      <Title value="">Objetivo do curso</Title>
      <CardIncrition>
        <Border>
          <div>
           
          </div>
        </Border>

        <DivContenteTextButton>
          <TextSolidColor>
            Uma iniciativa de parceiros com foco na transformação social que
            busca auxiliar jovens a ingressarem no mercado de tecnologia. Faça
            parte da rede de parceiros e saiba como ajudar nessa causa!
          </TextSolidColor>
          <TextSolidColor>
            <PrimaryButton value="Perguntas frequentes" />
          </TextSolidColor>
        </DivContenteTextButton>

        <DivImg>
          <img
            src={Peoples}
            alt="Uma pessoa usando fonte de ouvido enquanto programa em frente ao computador"
          />
        </DivImg>
      </CardIncrition>
    </div>
  );
};
