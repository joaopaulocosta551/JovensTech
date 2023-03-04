import { TitleH1 } from "./styles"

interface IProps{
    value: string;
    children: string;
}

export const Title = ({value, children}: IProps) => {
   return<TitleH1>{children}</TitleH1>
}