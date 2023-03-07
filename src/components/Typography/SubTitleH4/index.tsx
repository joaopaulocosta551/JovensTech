import { DivTitle } from "./estyle";

interface IProps {
    children: string;
}

export const SubTitleH4 = ({children}: IProps) => {
    return(

        <DivTitle>{children}</DivTitle>
    )

}