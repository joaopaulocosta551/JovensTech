import { InputCPF } from "@/components/InputForm/InputCPF";
import { InputData } from "@/components/InputForm/InputData";
import { InputText } from "@/components/InputForm/InputText";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SubTitleH3 } from "@/components/Typography/SubTitleH3";
import { Paragraph } from "../../../components/Typography/Paragraph";
import {
  SectionTextForms,
  DivRowInputs,
  FirstDivForm,
  SecundDivForm,
  SectionVideoForm,
  ContentForm,
} from "./styles";
import {AiOutlineUser} from 'react-icons/ai'
import { InputNumber } from "@/components/InputForm/InputNumber";

export const SectionForms = () => {
  return (
    <SectionTextForms>
      <div style={{ marginBottom: "2.5rem", marginTop: "6.25rem" }}>
        <SectionVideoForm>
          <iframe
            width="100%"
            height="100%"
            style={{ borderRadius: "8px" }}
            src="https://www.youtube.com/embed/E7OUJCCfN4I"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </SectionVideoForm>
      </div>
      <SubTitleH3>Increva-se para as próximas turmas Jovens Tech</SubTitleH3>
      <Paragraph>
        Esse é o primeiro passo que você vai dar para alavancar sua carreira.
      </Paragraph>
      <form style={{ marginTop: "5.5rem", marginBottom: "3rem" }}>
        <ContentForm>
          <div style={{display: 'flex', alignItems:'center'}}><AiOutlineUser fontSize={'18px'}/><p style={{marginLeft:'10px'}}>Dados pessoas</p></div>
          <DivRowInputs>
            <InputText/>
            <InputData label="Data de nascimento" />
            <InputCPF label={"CPF"} />
          </DivRowInputs>
          <DivRowInputs>
            <InputText/>
            <InputText/>
          </DivRowInputs>
          <DivRowInputs>
            <InputText/>
            <InputText/>
            <InputNumber/>
          </DivRowInputs>
        </ContentForm>
      </form>
    </SectionTextForms>
  );
};
