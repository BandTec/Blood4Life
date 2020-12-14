import styled from 'styled-components';

export const container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
`;
export const bodyContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const divNavSpacing = styled.div`
    background-color: salmon;
    width: 100%;
    height: 10vh;
    min-height: 10vh;
    max-height: 10vh;
    position: relative;
    top: 0;
    right: 0;
`;  
export const divContainer = styled.div`
    height: 100%;
    max-height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;