import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useUserInfo } from "../contexts/UserInfo";
import axios from "axios";

export default function Header() {
  const { userInfo, setUserInfo } = useUserInfo();
  const navigate = useNavigate();
  console.log(userInfo)
  const isLogged = localStorage.getItem("data");
  const data = JSON.parse(isLogged);
  return (
    <PageStyle>
      {isLogged && (
        <>
          <ButtonsContainer>
            <h1>
              Seja bem-vindo(a), <strong>{data.userName}</strong>!
            </h1>
            <div>
              <HomeButton onClick={() => navigate("/me")}>Home</HomeButton>
              <RankingButton onClick={() => navigate("/")}>
                Ranking
              </RankingButton>
              <LogoutButton
                onClick={() => {
                  axios
                    .delete(
                      `https://api-shortly-sql-y2le.onrender.com/logout`,
                      {
                        headers: {
                          Authorization: `Bearer ${data.token}`,
                        },
                      }
                    )
                    .then((answer) => {
                      localStorage.removeItem("data");
                      setUserInfo({});
                      navigate("/");
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                Sair
              </LogoutButton>
            </div>
          </ButtonsContainer>
        </>
      )}
      {!isLogged && (
        <AuthButtonsContainer>
          <LoginButton onClick={() => navigate("/sign-in")}>Entrar</LoginButton>
          <button onClick={() => navigate("/sign-up")}>Cadastre-se</button>
        </AuthButtonsContainer>
      )}
      <Title onClick={() => navigate("/")}>
        <h1>Shortly 🩳</h1>
      </Title>
    </PageStyle>
  );
}

const PageStyle = styled.div`
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  font-family: "Lexend Deca", sans-serif;
  margin-top: 3vh;
  width: 92%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    justify-content: space-between;
    > button {
      border: none;
      background-color: initial;
      cursor: pointer;
    }
  }
  > h1 {
    color: #1c3aa9;
    font-weight: 600;
    font-size: 15px;
    > strong {
      color: #29b6f6;
    }
  }
`;

const AuthButtonsContainer = styled.div`
  margin-top: 3vh;
  width: 94%;
  display: flex;
  justify-content: flex-end;
  font-family: "Lexend Deca", sans-serif;
  > button {
    border: none;
    background-color: initial;
    cursor: pointer;
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

const HomeButton = styled.button`
  color: black;
`;

const RankingButton = styled.button`
  color: black;
  text-shadow: 1px 1px yellow;
`;

const LogoutButton = styled.button`
  color: black;
  text-decoration: underline;
`;

const LoginButton = styled.button`
  color: #1c3aa9;
`;
