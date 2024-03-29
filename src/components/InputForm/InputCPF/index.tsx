import { InputCpf } from "./styles";
import InputMask from "react-input-mask";
import "./styles.css";

interface Iprosp {
  label: string;
  placeholder: string;
}

export const InputCPF = ({ label, placeholder }: Iprosp) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>{label}</label>
      <InputCpf>
        <InputMask
          className="InputCPF"
          mask="999.999.999-99"
          placeholder={placeholder}
        />
      </InputCpf>
    </div>
  );
};
