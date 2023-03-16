import { InputTel } from "./styles";
import InputMask from "react-input-mask";
import "./styles.css";

interface Iprosp {
  label: string;
  placeholder: string;
}

export const InputPhone = ({ label, placeholder }: Iprosp) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>{label}</label>
      <InputTel>
        <InputMask
          className="InputTel"
          mask="(99) 99999-9999"
          placeholder={placeholder}
        />
      </InputTel>
    </div>
  );
};
