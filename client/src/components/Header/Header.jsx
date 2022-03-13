import './header.scss';
import { Navbar } from '../Navbar/Navbar';
import { Menu } from '../Menu/Menu';
export const Header = ()=>{
    return (
        <div id="header">
            <Navbar />
            <Menu />
        </div>
    )
}