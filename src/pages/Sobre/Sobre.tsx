import { SbStyle } from "../../style/SobreStyle/sb";
import { ButtonSocial } from "../../style/geral/buttonSocial";
import linkdin from "../../assets/img/linkedin.png";
import github from "../../assets/img/github.png";
import download from "../../assets/img/download.png";

export const Sobre = () => {
    return(
        <SbStyle>
            
            <div className="sobre">
            
                <fieldset>
                    
                    <h3>Dados Pessoais:</h3>
                    <p>
                        <b>Idade:</b> 
                        Carlos Augusto Mores Barros.
                    </p>
                    <p>
                        <b>Email:</b> 
                        moraezaugusto@gmail.com.
                    </p>
                    <p>
                        <b>Endereço:</b> 
                        Chapadinha - Maranhão.
                    </p>
                    <p>
                        <b>Telefone:</b> 
                        (98) 9 91188585.
                    </p>
                </fieldset>

                <div>
                    <h3>Redes Sociais:</h3>
                    <ButtonSocial bg="#171515" href="https://github.com/AugustoMoraez" target="_blank">
                        <img src={github} alt="logo github"  />
                        <span>GitHub</span>
                    </ButtonSocial>
                    
                    <ButtonSocial bg="#0e76a8" href="https://www.linkedin.com/in/carlos-augusto-moraes-barros-509182241/" target="_blank">
                        <img src={linkdin} alt="logo linkedin" />
                        <span>Linkedin</span>
                    </ButtonSocial>

                    <ButtonSocial bg="#ffffff" href="https://docs.google.com/uc?export=download&id=102MzDJjtWQmMWnhgd-eMIsJRzVKVtCOz" target="_blank">
                        <img src={download} alt="logo github"  />
                        <span style={{color:"black"}}>Portifolio</span>
                    </ButtonSocial>
                </div>
            
            </div>
        </SbStyle>
    )
}