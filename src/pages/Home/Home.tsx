import {ContFlex} from "../../style/HomeStyles/conteinerFlex";
import profile from "../../assets/img/profile.png";

export const Home = () => {
    return(
        <ContFlex>
            <h1>Bem-Vindo</h1>
            <div className="item-1">
                <div className="perfil">
                    <img src={profile} alt="profile" />
                </div>
            </div>
            <div className="item-2">
                <span>Meu <b>portifólio</b></span>
                <br />
                <p>  Olá, meu nome é Augusto sou universitário de Ciências da Computação e aspirante a  desenvolvedor frontend, neste
                   site/portifólio você poderá ver alguns de meus projetos e também entrar em contato comigo através da aba contratos.</p>
            </div>
        
        </ContFlex>
    )
}