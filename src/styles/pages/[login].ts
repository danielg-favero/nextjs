import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        width: 200px;
        border-radius: 100%;
        margin-bottom: 50px;
    }

    h1{
        color: ${props => props.theme.colors.primary};
        font-size: 64px;
    }

    p{
        color: ${props => props.theme.colors.text};
        font-size: 12px;
    }
`;