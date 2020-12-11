import styled from "styled-components";

export const container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

export const bodyContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const formContainer = styled.form`
  height: 100%;
  background-color: red;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 700px) {
    overflow: auto;
  }
`;

export const containerForm = styled.form`
    background-color: #7DABFA;
    width: 70vw;
    height: 70vh;
    border-radius: 30px;
    margin-top: 50px;
    margin-bottom: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
