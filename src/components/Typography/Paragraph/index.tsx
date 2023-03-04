import { Title } from "./styele"

interface IProps {
    children: string
}

export const Paragraph = ({children}: IProps) => {
    return(
        <Title>{children}</Title>
    )
}