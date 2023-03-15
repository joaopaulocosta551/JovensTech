import { InputForm } from "@/components/InputForm/InputText";
import { PrimaryButton } from "@/components/PrimaryButton";
import { IntputTextArea } from "@/paghes/Imprensa/InputTextArea";
import { BorderForm, ContentForms, DivRowInputs } from "./styles";

export const SectionFormContatctUs = () => {
  return (
    <>
      <BorderForm />
      <ContentForms>
        <DivRowInputs>
          <InputForm
            label="Nome Completo"
            type="name"
            placeholder="Nome Completo"
          />
          <InputForm
            label="Email"
            type="email"
            placeholder="seuemail@email.com"
          />
        </DivRowInputs>
        <IntputTextArea placeholder="digite aqui"/>
        <PrimaryButton value="Enviar" />
      </ContentForms>
    </>
  );
};
