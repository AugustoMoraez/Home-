import styled from "styled-components";


export const PjStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;   
    flex-wrap : wrap ;
    height: 70vh;
    margin-bottom: 20px 0px;
    a{
        margin: 10px 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px;
        transition: transform 1s;
        outline: none;
        text-decoration: none;
        cursor: pointer;

        &:hover{
            span{
                transform: translateX(5px) scale(1.1);
            }
            img{
                transform: translateX(5px) scale(1.1);
            }
        }
        div{
            border-radius: 10px;
            width: 340px;
            height: 190px;
            &:hover{
                background-color: rgba(0,0,0,0.5);
            }
        }
        span{
        
            cursor: pointer;
            color: #333;
            font-size: 20px;
            margin-bottom: 30px;
            font-weight: 400;
            transition: transform 0.5s;
            
        }
        img{
            
            cursor: pointer;
            box-shadow: 1px 1px 10px #333;
            transition: transform 0.5s;
            background-color: rgba(0,0,0,0.3);
            border-radius: 10px;
            border: 1px solid #333;
            width: inherit;
            height: inherit;
            background-position: center;
            background-size: cover;
        }
    }
`