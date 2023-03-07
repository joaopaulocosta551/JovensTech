import { BoxTeacher, CardIconPhoto, DivWhiteTeacher } from "./styles";
import Jonathan from '@/assets/Tutores/jonathan.png';
import Roberto from '@/assets/Tutores/Roberto.png';
import Samanta from '@/assets/Tutores/samanta.png';


export const SectionTeacher = () => {
  return (
    <section style={{ width: "100%", display: 'flex', alignItems:'center', justifyContent:'center' }}>
      <BoxTeacher>
        <DivWhiteTeacher>
          <CardIconPhoto>
            <img src={Jonathan} alt="Jonathan Boilesen" />
            <p style={{color: 'black', marginTop: '5px'}}>Jonathan Boilesen</p>
          </CardIconPhoto>
          <CardIconPhoto>
            <img src={Roberto} alt="Jonathan Boilesen" />
            <p style={{color: 'black', marginTop: '5px'}}>Roberto A. Leitão           </p>
          </CardIconPhoto>
          <CardIconPhoto>
            <img src={Samanta} alt="Jonathan Boilesen" />
            <p style={{color: 'black', marginTop: '5px'}}>Samanta Fedrizzi</p>
          </CardIconPhoto>
        </DivWhiteTeacher>
      </BoxTeacher>
    </section>
  );
};
