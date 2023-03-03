import {Button} from './style';

interface IProps{
    value: string;
}

export function SecondaryButton({value}: IProps){
 return(
    <Button>
        <img src="/icon-user.svg"  style={{width: '1rem', height:'1rem'}}/>
        {value}
    </Button>
 )
}