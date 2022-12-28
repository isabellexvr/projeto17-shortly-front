import styled from "styled-components";
import Header from "../constants/Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function RankingPage() {
  const [ranking, setRanking] = useState([]);
  useEffect(() => {
    axios
      .get("https://api-shortly-sql-y2le.onrender.com/ranking")
      .then((answer) => {
        console.log(answer.data);
        setRanking(answer.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {ranking.length < 1 && (
        <>
          <Header></Header>
          <RankingContainer>
            <Title>🏆 Ranking</Title>
            <DataStyle></DataStyle>
            <h2>
              Quer encurtar links? Torne-se já um shortly você também, clicando{" "}
              <Warning to="/sign-up">aqui</Warning>!
            </h2>
          </RankingContainer>
        </>
      )}
      {ranking.length > 0 && (
        <>
          <Header></Header>
          <RankingContainer>
            <Title>🏆 Ranking</Title>
            <DataStyle>
              {ranking.map((c, i) => (
                <Data>
                  {i}. {c.name} - {c.linksCount} links - {c.visitCount}{" "}
                  visualizações
                </Data>
              ))}
            </DataStyle>
            <h2>
              Quer encurtar links? Torne-se já um shortly você também, clicando{" "}
              <Warning to="/sign-up">aqui</Warning>!
            </h2>
          </RankingContainer>
        </>
      )}
    </>
  );
}

const RankingContainer = styled.div`
  margin-top: 9vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  > h2 {
    margin-top: 30px;
    font-size: 26px;
    font-family: "Lexend Deca", sans-serif;
    font-weight: 700;
    width: 82%;
    text-decoration: none;
    color: #1c3aa9;
    line-height: 30px;
  }
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
  padding: 13px;
  box-sizing: border-box;
  font-family: "Lexend Deca", sans-serif;
  font-size: 14px;
  font-weight: 600;
`;

const Warning = styled(Link)`
  font-size: 26px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 700;
  width: 82%;
  text-decoration: none;
  color: #29b6f6;
`;

const Data = styled.h1``;
