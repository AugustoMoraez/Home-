import { Menu } from "../../style/HeaderStyles/menuStyle";
import {Link} from "react-router-dom";

export const Nav = () => {
    return(
        <Menu>
            <ul>
                <li><Link to={"/"}>HOME</Link></li>
                <li><Link to={"/Projetos"}>PROJETOS</Link></li>
                <li><Link to={"/Social"}>SOCIAL</Link></li>
                <li><Link to={"/Sobre"}>SOBRE</Link></li>
            </ul>
        </Menu>
    )
};