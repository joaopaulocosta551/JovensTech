import  "react-responsive-carousel/lib/styles/carousel.min.css" ;  // requer um carregador 
import  {  Carousel  }  from  'react-responsive-carousel' ; 

import { SubTitle } from "../../../components/Typography/SubTitle";
import { CompanyDescription, ContainerSlider, DivBorderGradient, DivGradientText, DivImg, DivText, } from "./style";
import { Paragraph } from "../../../components/Typography/Paragraph";
import  Boilisen from "../../../assets/imageLog/boilisen.png";
import Mtcorp from "../../../assets/imageLog/mtcorp.png";
import Manetoni from "../../../assets/imageLog/manetoni.png";
import UAM from "../../../assets/imageLog/uma.png";
import Casa from "../../../assets/imageLog/casa.png";


interface ISlider {
    text: string;
    img: string;
    alt: string;
    nameEmpresa: string;
}

export const SectionSlider = () => {
    const slider: ISlider[] = [
        {
            text: "Desde 2015 a Boilesen vem aperfeiçoando a gestão e a performance de equipes através da orientação estratégica e da educação corporativa sob demanda, realizando e entregando melhorias nos processos de decisão a níveis gerenciais, executivos e estratégicos, aumentando sua produtividade, estruturando sua gestão de conhecimento e orientando sua cultura cultura corporativa.",
            img: Boilisen,
            nameEmpresa: 'Boilesen',
            alt: `Logo marca da empresa`

        },
        {
            text: "A MTCorp é uma organização que oferece tecnologia por meio de softwares para as necessidades da sua empresa. Com dedicação, profissionalismo e uma equipe altamente capacitada, a MTCorp atua desde 2018 como uma empresa referência no mercado em tecnologia. Além disso, sua busca é por melhorias e otimização nos processos estratégicos das empresas, tendo diversos cases de sucesso em sua trajetória.",
            img: Mtcorp,
            nameEmpresa: 'Mtcorp',
            alt: `Logo marca da empresa`
        },
        {
            text: "Fundada em 1982, a Manetoni, distribuidora de produtos e prestadora de serviços em aço, é uma empresa que consagrou sua marca e consolidou forte imagem no mercado da construção civil e industrial. Atualmente a Manetoni é sediada na cidade de Piracicaba, uma região muito conhecida pelo desenvolvimento industrial e da construção civil.",
            img: Manetoni,
            nameEmpresa: 'Manetoni',
            alt: `Logo marca da empresa`
        },
        {
            text: "Inovação nos define. Em mais de 50 anos de história sempre nos comprometemos a oferecer a mais alta qualidade de ensino com a visão para antecipar as tendências do mercado e formar profissionais globais, completos. Com infraestrutura moderna,professores experientes e uma forte conexão com o mercado de trabalho, garantimos aos alunos um caminho livre para o futuro que querem conquistar!",
            img: UAM,
            nameEmpresa: 'UAM',
            alt: `Logo marca da empresa`
        },
        {
            text: "A Casa do Amor Fraterno, Organização da Sociedade Civil (OSC), sem fins econômicos,  começou em 1995, com um curso para gestantes, com algumas orientações sobre a gravidez e a maternidade. A partir dele, observamos que nossas ações poderiam beneficiar não só gestantes, mas também crianças, jovens e adultos.",
            img: Casa,
            nameEmpresa: 'Casa do amor Fraterno',
            alt: `Logo marca da empresa`
        },
    
    ];

    return (
        <section style={{display: 'flex', flexDirection: 'column'}}>
            <SubTitle>Idealizadores</SubTitle>
        
            <div style={{width:'50rem'}}>
                <Carousel statusFormatter={() => ''}>
                        {
                            slider.map((card) => {
                                return (
                                <ContainerSlider>
                                    <DivBorderGradient>
                                        <DivImg><img style={{maxWidth: '80%'}} src={card.img} alt={card.alt}/></DivImg>
                                    </DivBorderGradient>
                                    <DivGradientText>
                                        <DivText>
                                            <CompanyDescription>{card.text}</CompanyDescription>                
                                        </DivText>
                                    </DivGradientText>
                                </ContainerSlider>
                                )
                            })
                        }
                </Carousel>
            </div>
            
        </section>
    );
}
