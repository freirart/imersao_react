import styled from 'styled-components';

const Button = styled.button`
    color: var(--primary);
    border: 1px solid var(--primary);
    background: var(--Black);
    box-sizing: border-box;
    cursor: pointer;
    padding: 8px 12px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .3s;
    &:hover,
    &:focus {
        opacity: 1;
        background: var(--primary);
        color: var(--Black);
        border: 1px solid var(--Black);
    }
    box-shadow: 10px 18px 19px 1px rgba(0,0,0,0.19);
`;

export default Button;
