import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-size: 64px;
        color: ${props => props.theme.colors.primary};
    }

    button{
        background: ${props => props.theme.colors.primary};
        border: none;
        border-radius: 8px;
        padding: 15px 40px;
        margin-top: 50px;
        color: ${props => props.theme.colors.text};
        cursor: pointer;
        transition: background-color 0.5s;
    }

    button:hover{
        background: #523b87;
    }
`;

export const ApiContainer = styled.div`
    background: ${props => props.theme.colors.primary};
    padding: 30px 50px;
    border-radius: 16px;
    margin-top: 60px;
    
    h1{
        font-size: 48px;
        color: ${props => props.theme.colors.text};
    }

    p{
        margin-top: 25px;
    }

    p a{
        text-decoration: none;
        color: #c4abff;
        transition: color 0.5s;
    }

    p a:hover{
        color: ${props => props.theme.colors.text}
    }
`;