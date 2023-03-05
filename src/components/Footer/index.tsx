import { ContentFooter, DivContent, DivContentFooter, TextCopyright } from "./style";
import Logo from '../../../public/logo_horizontal.svg'

export const Footer = () => {
    return(
        <ContentFooter>
           <DivContent>
                <DivContentFooter>
                   <img style={{widows: '9.9rem', height: '3rem'}} src={Logo} alt="" />
                   <TextCopyright>
                    Jovens tech &copy; Todos os direitos Reservados
                </TextCopyright>
                </DivContentFooter>
            </DivContent> 
        </ContentFooter>
    )
}