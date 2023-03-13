import { InputForm } from "@/components/InputForm/InputText";
import { PrimaryInput } from "@/components/InputForm/InputText/styles";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SubTitleH3 } from "@/components/Typography/SubTitleH3";
import { SectionVideo } from "@/paghes/Home/SectionVideo";
import { Paragraph } from "../../../components/Typography/Paragraph";
import {
  SectionTextForms,
  DivRowInputs,
  FirstDivForm,
  SecundDivForm,
  SectionVideoForm,
} from "./styles";

export const SectionForms = () => {
  return (
    <SectionTextForms>
      <div style={{marginBottom: '2.5rem', marginTop: '6.25rem'}}>
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
      <form style={{ marginTop: "5.5rem", width: '55.85rem', marginBottom: "3rem"}}>
        <DivRowInputs>
          <FirstDivForm>
            <InputForm label="Nome completo" placeholder="Nome" type="text" />
          </FirstDivForm>
          <SecundDivForm>

            <InputForm
              label="Data de nascimento"
              placeholder="dd/mm/aa"
              type="date"
            />
            <InputForm
              label="CPF"
              placeholder="999.999.999-99"
              mask="CPF"
              type={""}
            />
          </SecundDivForm>
        </DivRowInputs>

        <DivRowInputs>
          <FirstDivForm>
            <InputForm label="Email" placeholder="Digite o seu email" type="email" />
          </FirstDivForm>
          <FirstDivForm>
          <InputForm label="Telefone" placeholder="(19) 9-99999999" mask="PHONE" type={""} />
          </FirstDivForm>
        </DivRowInputs>

        <DivRowInputs>
          <FirstDivForm>
            <InputForm label="Endereço" placeholder="Nome" type="text" />
          </FirstDivForm>
          <SecundDivForm>

            <InputForm
              label="Bairro"
              placeholder=""
              type="text"
            />
            <InputForm
              label="Número"
              placeholder="999.999.999-99"
              type="number"
            />
          </SecundDivForm>
        </DivRowInputs>
        <PrimaryButton value="Increva-se"/>
      </form>
    </SectionTextForms>
  );
};
