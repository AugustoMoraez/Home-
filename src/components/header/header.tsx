import { Menu } from "../../style/HeaderStyles/headerStyle";
import {Logo} from "../../style/geral/logo";
import {Nav} from "./menu";
import { NavMobile } from "./menuMobile";
export {NavMobile} from "./menuMobile";

export const Header = () => {
    return(
        <Menu>
            <Logo>AMs</Logo>
            <Nav/>
            <NavMobile/>
        </Menu>
    )
}