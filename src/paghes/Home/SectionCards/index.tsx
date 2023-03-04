import { Card, Cards, TextCard } from "./styles";

import { BsPerson } from "react-icons/bs";
import { TbPhotoSearch } from "react-icons/tb";
import { IconType } from "react-icons/lib";

export const SectionCards = () => {
  return (
    <section>
      <Cards>
        <Card>
          <BsPerson />
          <TextCard>
            Aprenda com profissionais do mercado, problemas reais e situações do
            dia-a-dia de um desenvolvedor de alto nível!
          </TextCard>
          <a href="#"></a>
        </Card>
        <Card>
          <TbPhotoSearch />
          <TextCard>
          Conheça mais sobre carreiras da tecnologia e faça parte da rede de jovens tech. Vamos construir o futuro juntos!
          </TextCard>
          <a href="#"></a>
        </Card>
        <Card>
          <TbPhotoSearch />
          <TextCard>
          Teremos várias turmas, conectando aprendizagem ao mercado de trabalho, trazendo oportunidades para todos!
          </TextCard>
          <a href="#"></a>
        </Card>
      </Cards>
    </section>
  );
};
