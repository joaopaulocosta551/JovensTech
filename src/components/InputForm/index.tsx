import { useState } from "react";
import { Container, DivRowInputs, InputStyle } from "./style";
import InputMask from 'react-input-mask';

interface IProps {
    type: string;
    mask?: "CPF" | "PHONE";
    label: string;
    placeholder: string;
}

export const InputForm = (props: IProps) => {

    const MASKS = {
        "DEFAULT": "",
        "PHONE": "(99) 99999-9999",
        "CPF": "999.999.999-99",
    };

    
  
  return (
    <div style={{maxWidth: "27.88rem", width:"27.88rem", height:""}}>
    <label>{props.label}</label>
    <InputStyle>
        <DivRowInputs>
          <Container>
            <InputMask style={{width: "100%", 
            height: "100%",
            background: "transparent",
            border: "none",
            outline:"none",
            marginLeft: "10px",
            color:"#ffffffa2",
            fontSize:"16px"}} mask={MASKS[props.mask || "DEFAULT"]} />
          </Container>
        </DivRowInputs>
    </InputStyle>
    </div>
  );
};
