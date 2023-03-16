import { CustInput, Inputnumber } from "./styles";

interface IProsp {
  label: string;
  placeholder: string;
}

export const InputNumber = ({label, placeholder}: IProsp) => {
  return (
    <div style={{display: 'flex', flexDirection:'column'}}>
        <label>{label}</label>
      <Inputnumber>
        <CustInput placeholder={placeholder}/>
      </Inputnumber>
    </div>
  );
};
