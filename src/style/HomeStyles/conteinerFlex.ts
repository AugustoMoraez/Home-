import styled from "styled-components";

export const ContFlex = styled.div`


    h1{
        font-size: 90%;
        position: absolute;
        left: 50%;
        transform:translateX(-50%);
        margin-top: 20px;
        font-weight: 200;
        color: #404040;
        font-size: 50px;
        z-index: 2;
        text-align: center;
    }

    .item-1{
        position: absolute;
        width: 100vw;
        left: 0;
        z-index: 1;
        background-color: aliceblue;
        justify-content: center;
        align-items: center;
        display: flex;
        height: 400px;

        .perfil{
            margin-top: 200px;
            box-shadow: 1px 1px 20px  #333;
            max-width: 400px;
            max-height: 400px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;




            img{
                background-size:cover;
                background-position: center;
                max-width: 390px;
                max-height: 390px;
                border-radius: 50%;
            }
        }
       
    }
    .item-2{
            position: absolute;
            z-index: 2;
            top: 650px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            left: 50%;
            transform: translateX(-50%);

            span{
                font-size: 30px;
                text-align: center;
            }
            p{
                width: 100%;
                max-width: 700px;
                text-align: center;
            }
        
       
    }
    @media(max-width:620px){
        h1{
        font-size: 40px;
        margin-top: 60px;
    }
    

    .item-1{
       

        .perfil{
            
            max-width: 360px;
            max-height: 360px;
            



            img{
                background-size:cover;
                background-position: center;
                max-width: 300px;
                max-height: 300px;
                border-radius: 50%;
            }
        }
       
    }


    .item-2{
            
            top: 560px;
            width: 100%;
            padding: 10px;

            span{
                font-size: 30px;
            }
            p{
                width: 100%;
                max-width: 700px;
            }
        
       
    }

    
    }
    @media(max-width:440px){
        h1{
            font-size: 30px;
        }
        .item-1{
        
            height: 200px;

            .perfil{
                
                max-width: 200px;
                max-height: 200px;
                



                img{
                    background-size:cover;
                    background-position: center;
                    
                    max-width: 180px;
                    max-height: 180px;
                    border-radius: 50%;
                }
            }
        }
        .item-2{
            top: 400px;
            span{
                font-size: 25px;
            }
            p{
                font-size: 15px;
            }
        }
    }
    @media(max-width:280px){
        h1{
            top: 70px;
            font-size: 25px;
        }
    }
`