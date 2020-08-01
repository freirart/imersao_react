import styled from 'styled-components';

const BtnLimpar = styled.button`
    position: relative;
    width: 90px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #111;
    outline: none;
    border: none;
    transition: .3s;
    border-radius: 3px;
    margin-right: 30px;
    cursor: pointer;
    box-shadow: 0 4px 0 -2px #1328db,
                0 -4px 0 -2px #1328db,
                -4px 0 0 -2px #1328db,
                4px 0 0 -2px #1328db;
    color:  white;

    &:hover{
        box-shadow: none;
        background: var(--frontEnd);
        color: black;
        font-weight: 600;
    }
`;

export default BtnLimpar;
