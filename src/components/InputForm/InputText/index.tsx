import { CustInput, Inputtext } from "./styles";

interface IProsp{
  label: string
  placeholder: string;
}

export const InputText = ({label, placeholder}:IProsp) => {
  return <div style={{display:'flex', flexDirection:'column', width: '100%'}}>
  <label>{label}</label>
  <Inputtext>
        <CustInput placeholder={placeholder}/>
  </Inputtext>
  </div>
};
