import {
  ContactUs,
  ContentPhoto,
  ContentIconContact,
  CardsInfoIcon,
  GradienteIcon,
  Contatcts,
} from "./styles";
import Peoples from "@/assets/imgDecoration/pessoas.png";
import { FiPhone } from "react-icons/fi";
import {MdOutlineEmail} from "react-icons/md";
import {BsInstagram} from "react-icons/bs"

export const SectionContactUs = () => {
  return (
    <ContactUs>
      <ContentPhoto>
        <img src={Peoples} alt="Pessoas reunidas na frente de um computador" />
      </ContentPhoto>
      <ContentIconContact>
        <CardsInfoIcon>
          <GradienteIcon>
            <FiPhone />
          </GradienteIcon>
          <Contatcts>
            <p style={{fontSize:'26px'}}>Telefone</p>
            <p style={{fontSize:'14px', color:' rgba(255, 255, 255, 0.72)', marginTop: '14px'}}>+55 (19) 971563930</p>
          </Contatcts>
        </CardsInfoIcon>
        <CardsInfoIcon>
          <GradienteIcon>
            <MdOutlineEmail />
          </GradienteIcon>
          <Contatcts>
            <p style={{fontSize:'26px'}}>Email</p>
            <p style={{fontSize:'14px', color:' rgba(255, 255, 255, 0.72)', marginTop: '14px'}}>contato@jovenstech.com.br</p>
          </Contatcts>
        </CardsInfoIcon>
        <CardsInfoIcon>
          <GradienteIcon>
            <BsInstagram />
          </GradienteIcon>
          <Contatcts>
            <p style={{fontSize:'26px'}}>Instagram</p>
            <p style={{fontSize:'14px', color:' rgba(255, 255, 255, 0.72)', marginTop: '14px'}}>@jovenstechpira</p>
          </Contatcts>
        </CardsInfoIcon>
      </ContentIconContact>
    </ContactUs>
  );
};
