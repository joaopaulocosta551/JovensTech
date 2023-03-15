import { CustInput, Inputdata } from "./styles";
import {BsCalendarCheck} from "react-icons/bs";

interface IProps {
    label: string;
}

export const InputData = ({label}: IProps) => {
    return <div style={{display:'flex', flexDirection:'column'}}>
    <label>{label}</label>
    <Inputdata>
        <CustInput></CustInput>
        <BsCalendarCheck fontSize={'20px'} color={'white'}/>
    </Inputdata>
    
  </div>
    
}