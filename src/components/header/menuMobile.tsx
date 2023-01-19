
import { useState } from "react";
import * as S from "../../style/HeaderStyles/menuMobileStyle";
import {Link} from "react-router-dom"




export const NavMobile = () => {

    const[toggleMenu,setToggleMenu]=useState<boolean>(false)
    const openMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    return(
        <S.MenuMobileStyle>
            <S.buttonMenu onClick={openMenu}  >
                <div></div>
                <div></div>
                <div></div>
            </S.buttonMenu>
            {toggleMenu &&
            <S.Aside>
                <span onClick={openMenu}>X</span>
                <span onClick={openMenu}><Link to={"/"}>HOME</Link></span>
                <span onClick={openMenu}><Link to={"/Social"}>SOCIAL</Link></span>
                <span onClick={openMenu}><Link to={"/Sobre"}>SOBRE</Link></span>
                <span onClick={openMenu}><Link to={"/Projetos"}>PROJETOS</Link></span>
            </S.Aside>    
        }
        </S.MenuMobileStyle>
    )

}