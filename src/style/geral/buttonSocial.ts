import styled from "styled-components";



type BtmSocialProp = {
    bg:string;
}

export const ButtonSocial = styled.a<BtmSocialProp>`
    width: 150px;
    height: 50px;
    background-color: ${prop => prop.bg };
    margin: 7px 0px;
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    box-shadow: 1px 1px 3px #333;
    outline: none;
    text-decoration: none;

    img{
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
    span{
        color: whitesmoke;
        font-weight: 600;
        cursor: pointer;
    }
`;