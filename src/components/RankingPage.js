import styled from "styled-components";
import Header from "../constants/Header";
import { Link } from "react-router-dom";

export default function RankingPage() {
  return (
    <>
      <Header></Header>
      <RankingContainer>
        <Title>🏆 Ranking</Title>
        <DataStyle></DataStyle>
        Quer encurtar links também? Crie a sua conta clicando
        <Warning>aqui</Warning>!
      </RankingContainer>
    </>
  );
}

const RankingContainer = styled.div`
  margin-top: 9vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 26px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 700;
`;

const DataStyle = styled.div`
  width: 82%;
  background: #ffffff;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  height: 40px;
  margin-top: 40px;
  border-radius: 24px 24px 0px 0px;
`;

const Warning = styled(Link)`
  font-size: 26px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 700;
  width: 82%;
`;
