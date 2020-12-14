import styled from 'styled-components';

export const container = styled.div`
    width: 100%;
    min-height: 15%;
    word-wrap: break-word;
    display:flex;
    cursor: pointer;
    margin: 3% 0;
    padding: 2% 0;
    background-color: #ffffff;
    justify-content: space-between;
    border-left: 3px solid transparent;
    /* box-shadow: 1px 1px 1px 10px; */
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    &&:hover {
        box-shadow: 4px 6px 8px rgba(0,0,0,0.3);
        background-color:#DDDDFF;
        border-left-color: #5580CB;
    }
    &&:first-child{
        margin: 0 0 3% 0;
    }
    &&:last-child{
        margin: 3% 0 0 0;
    }
`;

export const cardInfo = styled.div`
    width: 100%;
    padding-left: 3%;
    display:flex;
    flex-direction: column;
    justify-content: center;
`;

export const title = styled.h3`
    color: #000000b3;
`;


export const address = styled.p`
    color: #000000b3;
`;

export const photo = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 6px;
    object-fit: cover;
`;
export const image = styled.div`
    /* background-color: ${props => props.cor}; */
    align-self: center;
    border-radius: 6px;
`;