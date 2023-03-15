import { CustInput, InputCpf } from "./styles";

interface Iprosp {
  label: string;

}

export const InputCPF = ({ label }: Iprosp) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>{label}</label>
      <InputCpf>
        <CustInput />
      </InputCpf>
    </div>
  );
};
