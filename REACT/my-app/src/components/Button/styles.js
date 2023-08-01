import styled from 'styled-components'

export const Button = styled.button`
    width: 367px;
    height: 74px;

    background: ${ props => props.isBack ? `transparente` : 
    'rgba(0, 0, 0, 0.8)'};
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

    img {
        width:22.95px;
        height:18.93px;
        transform: ${ props => props.isBack && 
        'rotateY(180deg)'};
    }

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
   
`