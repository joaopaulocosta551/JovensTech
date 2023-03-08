import { useState } from "react";
import { Container } from "./style";
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
    <Container>
      <label>{props.label}</label>
      <InputMask mask={MASKS[props.mask || "DEFAULT"]} />
      {/* <input placeholder={props.placeholder} type={props.type} /> */}
    </Container>
  );
};
