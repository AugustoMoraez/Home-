import {PjStyle} from '../../style/ProjetosStyle/PjStyle'
import  adv from "../../assets/img/advogado.png";
import  barber from "../../assets/img/barbearia.png";
import  cr from "../../assets/img/crud.png";
import  imc from "../../assets/img/imc.png";


export const Pj = () => {
    return(

    <>
    
        <PjStyle>

            <a href='https://augustomoraez.github.io/advocaciaLP/' target="_blank">
                <span>LP advogado</span>   
                <div>
                    <img src={adv}  />
                </div>
            </a>
            <a href='https://augustomoraez.github.io/barbersite/' target="_blank">
                <span>LP Barbearia</span>
                <div>
                    <img src={barber}/>
                </div>
            </a>
            <a href='https://augustomoraez.github.io/reactJS-imc/' target="_blank"> 
                <span>Calculadora IMC</span>
                <div>
                    <img src={imc}  />
                </div>
                    
            </a>
            <a href='https://augustomoraez.github.io/crud/' target="_blank">
                <span>CRUD</span>
                <div>
                    <img src={cr} />
                </div>
                    
            </a>

        </PjStyle>
    </>

    )
}