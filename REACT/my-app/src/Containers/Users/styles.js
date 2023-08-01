import styled from 'styled-components'
import Background from '../../assets/background.svg'

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    height: 100%;
    min-height: 100vh;
`

export const Image = styled.img`
    margin-top: 30px;    
`

export const Button = styled.button`
    width: 367px;
    height: 74px;

    background: transparent;
    border-radius: 14px;
    border: 1px solid #FFFFFF;

    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;
    margin-top: 120px;

    color: #FFFFFF;
    cursor: pointer;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    gap: 20px;

    img {
        width:22.95px;
        height:18.93px;
        transform: rotateY(180deg);
    }

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
   
`

export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 367px;
    height: 58px;

    border: none;
    outline: none;

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;

        color: #ffffff;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;        
    }

`