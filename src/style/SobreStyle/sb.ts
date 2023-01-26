import styled from "styled-components";


export const SbStyle = styled.div`
      
    width: 100%;
    left: 0;
    position: absolute;
    z-index: -1;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;   
    flex-wrap : wrap ;
   
    
    h1{
        font-weight: 300;
        font-size: 30px;
    }
    
    .sobre {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        
        div{
        margin: auto;
        padding:30px ;
            h3{
                font-size: 25px;
                font-weight: 300;
                text-align: left;
                padding: 0px;
            }
        }
    
        
        fieldset{

            padding:30px ;
            border: none;
        
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: left ;
            height: 240px;
            h3{
                font-size: 25px;
                font-weight: 300;
                text-align: left;
                padding: 0px;
            }
            b{
                font-weight: 500;
            }
            p{
                font-weight: 300;
            }
        }
    }
    
  

   
    @media(min-width:860px){
        top: 50%;
        transform: translateY(-50%);
        height: 600px;
    }
`
