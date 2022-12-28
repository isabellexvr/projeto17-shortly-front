import styled from "styled-components";
import Header from "../constants/Header";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  function handleForm({ target: { value, name } }) {
    setForm({ ...form, [name]: value });
  }

  function sendForm(e) {
    e.preventDefault();
    console.log(form);
    axios
      .post("https://api-shortly-sql-y2le.onrender.com/signup", form)
      .then((answer) => {
        alert(answer.data);
        navigate("/sign-in");
      })
      .catch((err) => {
        alert(err.response.data)
        console.log(err.response);
      });
  }

  return (
    <>
      <Header />
      <PageStyle>
        <Line />
        <Title>Cadastro</Title>
        <SignUpForm onSubmit={sendForm}>
          <input
            onChange={handleForm}
            placeholder="Nome"
            name="name"
            type="text"
          />
          <input
            onChange={handleForm}
            placeholder="E-mail"
            name="email"
            type="email"
          />
          <input
            onChange={handleForm}
            placeholder="Senha"
            name="password"
            type="password"
          />
          <input
            onChange={handleForm}
            placeholder="Confirme a sua Senha"
            name="confirmPassword"
            type="password"
          />
          <button onSubmit={sendForm}>Cadastrar-se</button>
        </SignUpForm>
      </PageStyle>
    </>
  );
}

const PageStyle = styled.div`
  width: 100%;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Line = styled.div`
  height: 1px;
  background-color: #1c3aa9;
  width: 76%;
  opacity: 60%;
`;

const Title = styled.h1`
  margin-top: 5vh;
  margin-bottom: 15px;
  font-family: "Lexend Deca", sans-serif;
  font-size: 25px;
  font-weight: 700;
  color: #29b6f6;
`;

const SignUpForm = styled.form`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 80%;
  > input {
    height: 9vh;
    width: 100%;
    background: #ffffff;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 7px;
    padding: 10px;
    box-sizing: border-box;
    ::placeholder {
      color: #29b6f6;
      font-size: 15.5px;
    }
  }
  > button {
    height: 9vh;
    border-radius: 7px;
    width: 100%;
    background-color: #29b6f6;
    border: 1px solid rgba(120, 177, 89, 0.25);
    font-size: 16px;
    font-weight: 700;
    color: white;
  }
`;
