import styled from "styled-components";
import Header from "../constants/Header";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({});

  function handleForm({ target: { value, name } }) {
    setForm({ ...form, [name]: value });
  }

  return (
    <>
      <Header />
      <PageStyle>
        <Title>Cadastro</Title>
        <SignUpForm>
          <input onChange={handleForm} placeholder="Nome" name="name" />
          <input onChange={handleForm} placeholder="E-mail" name="email" />
          <input onChange={handleForm} placeholder="Senha" name="password" />
          <input
            onChange={handleForm}
            placeholder="Confirme a sua Senha"
            name="confirmPassword"
          />
        </SignUpForm>
      </PageStyle>
    </>
  );
}

const PageStyle = styled.div`
  width: 100%;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
    margin-bottom: 15px;
    font-family: "Lexend Deca", sans-serif;
    font-size: 25px;
    font-weight: 700;
    color: #1c3aa9;
`

const SignUpForm = styled.form`
  height: 42vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  > input {
    height: 9vh;
    width: 80%;
    background: #ffffff;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 7px;
    padding: 10px;
    box-sizing: border-box;
    ::placeholder{
        color: #29b6f6;
        font-size: 15.5px;
    }
  }
`;
