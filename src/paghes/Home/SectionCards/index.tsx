import { Card, Cards, TextCard } from "./styles";

import { BsPerson } from "react-icons/bs";
import { IconType } from "react-icons/lib";
import { TbPhotoSearch} from "react-icons/tb";
import { IoIosGitNetwork } from "react-icons/io"
import { SubTitle } from "../../../components/Typography/SubTitle";


interface ICard {
  icon: IconType;
  text: string;
  style: React.CSSProperties;
}
 
export const SectionCards = () => {
  const cards: ICard[] = [
    {
      icon: BsPerson,
      text: "Aprenda com profissionais do mercado, problemas reais e situações do dia-a-dia de um desenvolvedor de alto nível!",
      style: {
        background: "linear-gradient(44.42deg, rgba(191, 44, 78, 0.9) -12.5%, rgba(139, 31, 109, 0.9) 50.12%, rgba(73, 64, 157, 0.9) 108.75%)",
      },
    },

    {
      icon: TbPhotoSearch,
      text: "Conheça mais sobre carreiras da tecnologia e faça parte da rede de jovens tech. Vamos construir o futuro juntos!",
      style: {
        background: "linear-gradient(44.11deg, rgba(109, 102, 172, 0.32) -8.48%, rgba(18, 105, 134, 0.32) 51.81%, rgba(71, 183, 163, 0.32) 108.75%)",
      },
    },
    {
      icon: IoIosGitNetwork,
      text: "Teremos várias turmas, conectando aprendizagem ao mercado de trabalho, trazendo oportunidades para todos!",
      style: {
        background: "linear-gradient(44.63deg, rgba(71, 183, 163, 0.32) -12.5%, rgba(71, 191, 104, 0.32) 51.37%, rgba(247, 204, 0, 0.32) 111.16%, rgba(247, 204, 0, 0.32) 111.16%)",
      },
    },
  ];

  return (
    <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
       <SubTitle>
        Por que participar do Jovens Tech?
        </SubTitle>
      <Cards>
        {cards.map((card) => {
          return (
            <Card style={card.style}>
              <card.icon />
              <TextCard>{card.text}</TextCard>
            </Card>
          );
        })}
      </Cards>
    </section>
  );
};
