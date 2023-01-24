import styled from "styled-components";


export const SbStyle = styled.div`
      
    width: 100%;
    left: 0;
    position: absolute;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;   
    flex-wrap : wrap ;
    padding: 30;
    margin-bottom: 20px 0px;
    h1{
        font-weight: 300;
        font-size: 30px;
    }
    .sobre {
        display: flex;
        align-items: center;
        justify-content: center;
        
        div{
        margin-left: 50px;
        
        }
    
        
        fieldset{
            margin-right: 50px;
           
            border: none;
        
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center ;
            height: 240px;
            h3{
                font-size: 25px;
                font-weight: 300;
                text-align: center;
                padding: 10px;
            }
            b{
                font-weight: 500;
            }
            p{
                font-weight: 300;
            }
        }
    }
    
    

    @media(max-width:859px){
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 40px 0px;
    }
    @media(max-width:300px){
        padding: 20px 0px;
    }
    @media(min-width:860px){
        top: 50%;
        transform: translateY(-50%);
        height: 600px;
    }
`
