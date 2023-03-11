import { SubTitle } from "../../../components/Typography/SubTitle"
import { CardIncrition, DivImg, DivGradientText, DivSolidColor, DivContenteTextButton, TextSolidColor } from "./styles"
import Photo from "../../../assets/imgDecoration/Photo.png"
import { Paragraph } from "../../../components/Typography/Paragraph"
import { PrimaryButton } from "../../../components/PrimaryButton"

export const SctionInscrition = () =>{
    return(
        <>
        <SubTitle>
            Conectamos jovens ao mercado
            através da educação
        </SubTitle>
        <CardIncrition>
            <DivGradientText>
                <DivSolidColor>
                    <DivContenteTextButton>
                       <TextSolidColor>
                         Aulas com professores do mercado
                         de trabalho atual
                       </TextSolidColor>
                       <TextSolidColor>
                        Redes de empresas que apoiam jovens empreendedores
                       </TextSolidColor>
                       <TextSolidColor>
                        Faça parte!
                       </TextSolidColor>
                       <TextSolidColor>
                       <PrimaryButton value="Inscreva-se"/>
                       </TextSolidColor>
                    </DivContenteTextButton>
                </DivSolidColor>
            </DivGradientText>
            <DivImg>
                <img src={Photo} alt="Uma pessoa usando fonte de ouvido enquanto programa em frente ao computador"/>
            </DivImg>
        </CardIncrition>
        </>
    )

}