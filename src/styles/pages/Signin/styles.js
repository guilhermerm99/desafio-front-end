import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    height: 100vh;
`;

export const Content = styled.div`
    gap: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 520px;
    height: 605px;
    box-shadow: 0 1px 2px #0003;
    max-width: 520px;
    box-sizing: border-box;
    background: #333333;
    border: 1px solid #333333;
    backdrop-filter: blur(2px);
    border-radius: 10px;
`;

export const LabelSignup = styled.label`
    font-size: 14px;
    color: #ffff;
`;

export const labelError = styled.label`
    font-size: 14px;
    color: red;
`;

export const Strong = styled.strong`
    cursor: pointer;

    a {
        text-decoration: none;
        color: #ffff;
    }
`;