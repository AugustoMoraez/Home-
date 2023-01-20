import styled from "styled-components";


export const PjStyle = styled.div`
      
    width: 100%;
    left: 0;
    position: absolute;
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;   
    flex-wrap : wrap ;
    padding: 30px;
    margin-bottom: 20px 0px;

    
    



    a{  
        position: relative;
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
            width: 100%;
            height: 100%;
            max-width: 340px;
            max-height: 190px;
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