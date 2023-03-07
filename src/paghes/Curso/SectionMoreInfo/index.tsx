import { PrimaryButton } from "@/components/PrimaryButton";
import { SectionInf, DivContent, List } from "./style";

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
            <DivContent>
                <h2 style={{fontSize: '1.75rem', marginTop: '2.5rem'}}>
                O que você vai aprender
                </h2>
                <p style={{fontSize:'16px'}}>
                Os objetivos e competências básicas para a formação educacional técnica sugerida são:
                </p>
                    <ul>
                        <List>Interpretação de textos</List>
                        <List>Desenvolvimento de textos</List>
                        <List>Leitura e compreensão de expressões e/ou textos em inglês</List>
                        <List>Raciocínio lógico – pensamento matemático</List>
                        <List>Pensamento sistêmico</List>
                        <List>Habilidades como: empatia, comunicação e liderança</List>
                        <List>Experiências e relação com processo de aprendizagem</List>
                        <List>Organização do trabalh</List>
                        <List>Aprendizagem por Projeto</List>
                    </ul>
                <p style={{fontSize:'16px', marginTop: '1rem'}}>
                Composição dos tempos e desafios de aprendizagem:
                </p>
                <p style={{fontSize:'16px', color: 'rgba(255, 255, 255, 0.5)'}}>
                Encontro 1. Introdução a Computadores e Sistemas (2 horas)
                </p>
                <p style={{fontSize:'16px', color: 'rgba(255, 255, 255, 0.5)'}}>
                Encontro 2. Design e Interfaces Homem-Computador (IHC) – Pt. 1 (2 horas)
                </p>
                <p style={{fontSize:'16px', color: 'rgba(255, 255, 255, 0.5)'}}>
                Encontro 3. Sistemas Operacionais – Pt. 1 (2 horas)
                </p>
                <p style={{fontSize:'16px', color: 'rgba(255, 255, 255, 0.5)'}}>
                Encontro 4. Sistemas Operacionais – Pt. 2 (2 horas)
                </p>
                <p style={{fontSize:'16px', color: 'rgba(255, 255, 255, 0.5)'}}>
                Encontro 5. Introdução a Algoritmos – Javascript – Pt. 1 (2 horas)
                </p>
                <p style={{fontSize:'16px', color: 'rgba(255, 255, 255, 0.5)'}}>
                Encontro 6. Introdução a Algoritmos – Javascript – Pt. 2 (2 horas)
                </p>
                <p style={{fontSize:'16px', color: 'rgba(255, 255, 255, 0.5)'}}>
                Encontro 7. Desenvolvimento de Aplicativos - Android (2 horas)
                </p>
                <p style={{fontSize:'16px', color: 'rgba(255, 255, 255, 0.5)'}}>
                Encontro 8. Desenvolvimento de Aplicativos - Android (2 horas)
                </p>
                <p style={{fontSize:'16px', color: 'rgba(255, 255, 255, 0.5)'}}>
                Encontro 9. Desenvolvimento de Aplicativos - Android (2 horas)
                </p>
                <p style={{fontSize:'16px', color: 'rgba(255, 255, 255, 0.5)'}}>
                Encontro 10. Desenvolvimento de Aplicativos - Android (2 horas)
                </p>
                <p style={{fontSize:'16px', color: 'rgba(255, 255, 255, 0.5)'}}>
                Encontro 11. Desenvolvimento de Aplicativos - Android (2 horas)
                </p>
            </DivContent>
            <DivContent/>
            <PrimaryButton value="Increva-se" />
        </SectionInf>

)

}