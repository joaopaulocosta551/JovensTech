import {CardIconDate, DivInfDateInfo, DivSolidColor} from './styles';
import  {MdOutlineTimer} from 'react-icons/md';
import {MdTimelapse} from 'react-icons/md';
import {BsCalendarEvent} from 'react-icons/bs';

export const SectionCardInfo = () => {
    return(
        <DivInfDateInfo>
            <DivSolidColor>
            <CardIconDate>
                <BsCalendarEvent />
                <p>Inicio do Curso</p>
                <p style={{fontSize:'14px', color: 'rgba(255, 255, 255, 0.5)'}}>dd/mm/aaaa</p>
            </CardIconDate>
            <CardIconDate>
                <MdOutlineTimer/>
                <p>Período</p>
                <p style={{fontSize:'14px', color: 'rgba(255, 255, 255, 0.5)'}}>18hrs às 20hrs</p>
            </CardIconDate>
            <CardIconDate>
                <MdTimelapse/>
                <p>Carga Horária</p>
                <p style={{fontSize:'14px', color: 'rgba(255, 255, 255, 0.5)'}}>48 Horas</p>
            </CardIconDate>
            </DivSolidColor>
        </DivInfDateInfo>
    )
}