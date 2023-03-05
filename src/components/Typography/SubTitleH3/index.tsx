import { ComponyName } from "./style"

interface IProsp {
    children: string;
}

export const SubTitleH3 = ({children}: IProsp) => {
    return(
        <ComponyName>{children}</ComponyName> 
    ) 
  
}
