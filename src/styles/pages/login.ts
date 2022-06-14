import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
  background: #f4f4f2;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  row-gap: 1rem;
  padding: 1rem;

  > h1 {
    color: #495464;
    text-align: center;
    border-bottom: 1px solid #495464;

    > span {
      font-size: 1.125rem;
    }
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.5rem;
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid #495464;
    background: #fff;
    color: #495464;
    transition: all 0.2s;

    :hover{
      border: 1px solid #FF5722;
      color: #495464;
    }
  }
`;
