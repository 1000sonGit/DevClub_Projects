import styled from 'styled-components'

export const Container = styled.div`
    background: #0A0A10;
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    height: 100%;
    min-height: 100vh;
`

export const Image = styled.img`
    margin-top: 40px;    
`

export const User = styled.li`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    align-content: space-around;
    gap: 8px;
        
    
    margin-top: 20px;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 367px;
    min-height: 101px;
    

    border: none;
    outline: none;

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 28px;  
        display: flex;
        align-self: flex-start;

        color: #ffffff;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;        
    }

    .name{
        font-weight: bold;
        }

    .userRequest{
        width: 260px;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: flex-start;        
        gap: 10px;
    }

`