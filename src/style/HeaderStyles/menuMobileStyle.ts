import styled from "styled-components";



type asideProp ={
    Toggle?:boolean;
    fnc?:()=>void;
}

export const MenuMobileStyle = styled.div`
    display: none;
    align-items: center;
    

    @media(max-width: 599px){
        display: flex;
    }

`

export const buttonMenu = styled.div`
   
    display: flex;
    flex-direction: column;
    cursor: pointer;
    
    div{
        background-color: #333;
        width: 25px;
        height: 3px;
        margin: 3px 5px;
        cursor: pointer;
    }
`

export const Aside = styled.aside<asideProp>`


    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.7);
    width: 101vw;
    height: 101vh;
    overflow: hidden;
    left: 50%;
    top: 50%;
    position: absolute;
    z-index: 99;
    transform: translate(-50%, -50%);
    

    span{
        color: white;
        font: 600;
        text-align: center;
        cursor: pointer;
        padding: 5px 60px ;
        &:hover{
            color: whitesmoke;
        }
        & *{
            color: white;
            text-align: center;
            cursor: pointer;
            padding: 5px 10px ;
            text-decoration: none;
            outline: none;
        }
        & *:hover{
            color: whitesmoke;
        }
    }
    
`