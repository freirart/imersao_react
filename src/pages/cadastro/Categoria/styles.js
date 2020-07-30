import styled from 'styled-components';

export const W50 = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const BtnBox = styled.div`
    display: flex;
    margin-top: 30px;
`;

export const BtnCadastrar = styled.button`
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
    box-shadow: 0 4px 0 -2px #19b73e,
                0 -4px 0 -2px #dc0028,
                -4px 0 0 -2px #1328db,
                4px 0 0 -2px #ff560b;
    color:  white;

    &:hover{
        box-shadow: none;
        background: var(--secondary);
        color: black;
        font-weight: 600;
    }
`;

export const BtnLimpar = styled.button`
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
