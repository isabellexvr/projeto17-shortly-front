import styled from "styled-components";
import Header from "../constants/Header";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToken } from "../contexts/TokenContext";
import { BarLoader } from "react-spinners";

export default function LoginPage() {
  const navigate = useNavigate();
  const { setToken } = useToken();
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);

  const isLogged = localStorage.getItem("data");
  if (isLogged) {
    const data = JSON.parse(isLogged);
    setToken(data);
    alert(`Seja bem-vindo(a) de volta, ${data.name}!`)
    navigate("/market");
    return;
  }

  function handleForm({ target: { value, name } }) {
    setForm({ ...form, [name]: value });
  }

  function sendForm(e) {
    e.preventDefault();
    console.log(form);
    setLoading(true)
    axios
      .post("https://api-shortly-sql-y2le.onrender.com/signin", form)
      .then((answer) => {
        console.log(answer.data);
        alert(`Seja bem-vindo(a), ${answer.data.name}!`);
        setLoading(false)
        const serialized = JSON.stringify(answer.data);
        localStorage.setItem("data", serialized);
        navigate("/sign-in");
      })
      .catch((err) => {
        alert(err.response.data);
        setLoading(false)
        console.log(err.response);
      });
  }
  return (
    <>
      {!loading && (
        <>
          <Header />
          <PageStyle>
            <Line />
            <Title>Entrar</Title>
            <SignUpForm onSubmit={sendForm}>
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
              <button onSubmit={sendForm}>Entrar</button>
            </SignUpForm>
          </PageStyle>
        </>
      )}
      {loading && (
        <>
          <Header />
          <PageStyle>
            <Line />
            <Title>Entrar</Title>
            <SignUpForm>
              <input disabled placeholder="E-mail" />
              <input disabled placeholder="Senha" />
              <button disabled>{<BarLoader color="white"
              />}</button>
            </SignUpForm>
          </PageStyle>
        </>
      )}
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
  height: 30vh;
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
    :disabled{
        background-color: #efefef;
        border: none;
    }
  }
  > button {
    height: 9vh;
    border-radius: 7px;
    width: 100%;
    background-color: #29b6f6;
    border: 1px solid rgba(41, 182, 246, 0.25);
    font-size: 16px;
    font-weight: 700;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    :disabled{
        background-color: #93dbf9;
    }
  }
`;
