import { SectionInf, DivContent } from "./style";

export const SectionMoreInfo = () => {
return(
        <SectionInf>
            <DivContent>
                <h2 style={{fontSize: '1.75rem', marginTop: '2.5rem'}}>
                Objetivo
                </h2>
                <p style={{fontSize:'16px', color: 'rgba(255, 255, 255, 0.5)'}}>
                Desenvolver a formação técnica proposta, suas competências básicas necessárias, a relação de trabalho com outros indivíduos, os diferentes níveis de exigências do próprio mercado de trabalho e como solucionar estes e outros desafios do processo de aprendizagem.
                </p>
            </DivContent>
            <DivContent>
                <h2 style={{fontSize: '1.75rem', marginTop: '2.5rem'}}>
                Local
                </h2>
                <p style={{fontSize:'16px', color: 'rgba(255, 255, 255, 0.5)'}}>
                Laboratório de informática da Universidade Anhembi Morumbi de Piracicaba
                </p>
            </DivContent>
            <DivContent>
                <h2 style={{fontSize: '1.75rem', marginTop: '2.5rem'}}>
                Certificado
                </h2>
                <p style={{fontSize:'16px', color: 'rgba(255, 255, 255, 0.5)'}}>
                Universidade Anhembi Morumbi e Manetoni/MTCorp
                </p>
            </DivContent>
        </SectionInf>

)

}