import { BoxTeacher, DivTextContent, DivWhiteTeacher } from "./styles";
import {TbBellRingingFilled} from 'react-icons/tb';
import { SubTitleH4 } from "@/components/Typography/SubTitleH4";
import { Paragraph } from "@/components/Typography/Paragraph";



export const SectionCardGradiente = () => {
  return (
    <section style={{ width: "100%", display: 'flex', alignItems:'center', justifyContent:'center' }}>
      <BoxTeacher>
        <DivWhiteTeacher>
            <DivTextContent>
            <div><TbBellRingingFilled/></div>
            <div>
                <SubTitleH4 children={"Fique de olho no seu e-mail!"} />
            </div>
            <div>
                <Paragraph children="Estamos recebendo as inscrições para o projeto e entraremos em contato via e-mail. Os jovens selecionados participarão das aulas presenciais, caso você não seja selecionado neste momento, abriremos novas turmas, #jovenstech" />
            </div>
            </DivTextContent>
        </DivWhiteTeacher>
      </BoxTeacher>
    </section>
  );
};
