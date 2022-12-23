import styled from "styled-components";
import { useState } from "react";

//if logged, show this

export default function Header() {
  return (
    <PageStyle>
      <AuthButtons>
        <button>Entrar</button>
        <button>Cadastre-se</button>
      </AuthButtons>
      <Title>
        <h1>Shortly 🩳</h1>
      </Title>
    </PageStyle>
  );
}

const PageStyle = styled.div`

    padding-bottom: 16px;
`;

const AuthButtons = styled.div`
  margin-top: 3vh;
  width: 96%;
  display: flex;
  justify-content: flex-end;
  > button {
    border: none;
    background-color: initial;
    margin-right: 5px;
    cursor: pointer;
  }
  > button:first-child {
    color: #1c3aa9;
  }
`;

const Title = styled.div`
  margin-top: 8.5vh;
  h1 {
    font-family: "Lexend Deca", sans-serif;
    font-size: 40px;
  }
  display: flex;
  justify-content: center;
  width: 100%;
`;
