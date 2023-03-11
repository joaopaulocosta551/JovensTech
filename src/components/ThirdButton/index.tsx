import { Button } from "./styles";

interface IProps{
    value: string;
}

export function ThirdButton({value}: IProps){
    return(
             <Button>{value}</Button>
    )
}