import { Li, Link, Ul } from "./style";

export function LinkMenu(){
    return (
        <Ul>
           <Li>
            <Link>Curso</Link>
           </Li>
           <Li>
            <Link>Contato</Link>
           </Li>
           <Li>
            <Link>Edições</Link>
           </Li>
           <Li>
            <Link>Perguntas Frequentes</Link>
           </Li>
        </Ul>)
}