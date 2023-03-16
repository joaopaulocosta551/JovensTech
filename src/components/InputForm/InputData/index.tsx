import { Inputdata } from "./styles";
import { BsCalendarCheck } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import "./styles.css";

interface IProps {
  label: string;
}

export const InputData = ({ label }: IProps) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>{label}</label>
      <Inputdata>
        <DatePicker
          className="InputDate"
          selected={startDate}
          onChangeRaw={(e)=>e.preventDefault()}
          onChange={(date: Date) => setStartDate(date)}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dateFormat={"dd/MM/yyyy"}
          dropdownMode="select"
          // readOnly
          locale={ptBR}
        />
        <div style={{marginRight: '25px'}}>
        <BsCalendarCheck fontSize={"18px"} color={"white"} />
        </div>
      </Inputdata>
    </div>
  );
};
