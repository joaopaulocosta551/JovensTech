import { Button } from "./style";

interface IProps{
    value: string;
}

export function ThirdButton({value}: IProps){
    return(
             <Button>{value}</Button>
    )
}