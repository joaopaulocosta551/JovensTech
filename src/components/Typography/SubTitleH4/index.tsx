import { DivTitle } from "./estyles";

interface IProps {
    children: string;
}

export const SubTitleH4 = ({children}: IProps) => {
    return(

        <DivTitle>{children}</DivTitle>
    )

}