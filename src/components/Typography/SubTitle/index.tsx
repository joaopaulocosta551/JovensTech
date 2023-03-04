import {TitleH2} from './style'

interface IProps {
    children: string;
}

export const SubTitle = ({children}: IProps) =>{
    return(
        <TitleH2>{children}</TitleH2>
    )
}