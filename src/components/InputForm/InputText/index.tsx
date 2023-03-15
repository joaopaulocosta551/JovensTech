import { CustInput, Inputtext } from "./styles";

interface IProsp{
  label: string;
}

export const InputText = ({label}:IProsp) => {
  return <div style={{display:'flex', flexDirection:'column'}}>
  <label>{label}</label><Inputtext>
        <CustInput/>
  </Inputtext>
  </div>
};
