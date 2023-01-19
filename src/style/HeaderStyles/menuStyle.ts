import styled from "styled-components";

export const Menu = styled.div`
    
    width: 500px;
    margin: 0px 10px;
    
    ul{
        list-style: none;
        display: flex;
        justify-content: space-between;
    }
    li{
        padding: 0px 10px;
        cursor: pointer;
        font-size: 18px;
        
        & *{
            text-decoration: none;
            outline: none;
            cursor: pointer;
            color: #333;
        }
        & *:hover{
            color:rgb(202, 202, 202);
        }
    }

    @media(max-width:600px){
        display: none;
    }
`