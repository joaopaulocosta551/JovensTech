// Components
import { LinkMenu } from './LinkMenu'
import { Nav } from './style';
import { SecondaryButton } from '../SecondaryButton';
import { ThirdButton } from '../ThirdButton';

export function MenuNav(){
    return (
        <Nav>
            <div>
                <a><img style={{ width:'9.9rem', height:'3rem'}} src="/logo_horizontal.svg" /></a>
            </div>
            <LinkMenu />
            <div style={{display: 'flex', alignItems: 'center', gap:'0.5rem',}}>
                <ThirdButton value= 'Entrar' />
                <SecondaryButton value= 'Inscreva-se' />
            </div>
        </Nav>
    );
}