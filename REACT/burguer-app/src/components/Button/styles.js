import styled from 'styled-components'

export const Button = styled.button`
    width: 367px;
    height: 74px;

    background: ${ props => props.isBack ? 'rgba(255, 255, 255, 0.14)' : 'rgba(217, 56, 86, 1)'};
    border-radius: 14px;
    border: ${ props => props.isBack ? `1px solid #FFFFFF` : 
    'none'};

    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;
    margin-top: ${ props => props.isBack && '120px'};

    color: #FFFFFF;
    cursor: pointer;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    gap: 20px;    

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
   
`