import {Button} from './styles'

interface IProps{
    value: string;
}


export function PrimaryButton({value}: IProps){
    return(
        <Button>{value}</Button>
    )
}