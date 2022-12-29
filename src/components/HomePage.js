import styled from "styled-components";
import Header from "../constants/Header";
import { useUserInfo } from "../contexts/UserInfo";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

export default function HomePage() {
  const navigate = useNavigate();

  /*   const isLogged = localStorage.getItem("data");
  if (!isLogged) {
    alert(`Você não está logado.`);
    navigate("/");
    return;
  } */
  return (
    <>
      <Header />
      <PageStyle>
        <ShortenUrlForm>
          <UrlInput placeholder="Links que cabem no bolso" name="url" />
          <UrlSumitButton>Encurtar Link</UrlSumitButton>
        </ShortenUrlForm>
        <UrlsContainer>
          <UrlStyle>
            <UrlInfo>
              <OriginalUrl>wefe</OriginalUrl>
              <ShortenedUrl>wef</ShortenedUrl>
              <VisitCount>wefwf</VisitCount>
            </UrlInfo>
            <DeleteButton>{<FaTrashAlt />}</DeleteButton>
          </UrlStyle>
        </UrlsContainer>
      </PageStyle>
    </>
  );
}

const PageStyle = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-top: 9vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShortenUrlForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const UrlInput = styled.input`
  width: 75%;
  height: 60px;
  background: #ffffff;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 12px;
  padding: 21px;
  box-sizing: border-box;
  ::placeholder {
    font-size: 12px;
  }
`;

const UrlSumitButton = styled.button`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border-radius: 12px;
  background-color: #1c3aa9;
  color: white;
  border: none;
  font-size: 12px;
  cursor: pointer;
  font-weight: 700;
`;

const UrlsContainer = styled.div`
  margin-top: 50px;
  width: 100%;
`;

const UrlStyle = styled.div`
  display: flex;
  width: 100%;
`;

const UrlInfo = styled.div`
  background-color: #1c3aa9;
  height: 60px;
  width: 80%;
  border-radius: 12px 0px 0px 12px;
  padding: 21px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Lexend Deca", sans-serif;
  font-size: 13px;
  color: white;
`;

const DeleteButton = styled.div`
  border-radius: 0px 12px 12px 0px;
  width: 20%;
  background: #ffffff;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 0px 12px 12px 0px;
  border: 1px solid rgba(120, 177, 89, 0.25);
  padding: 21px;
  box-sizing: border-box;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  > svg {
    color: red;
    font-size: 22px;
  }
`;

const OriginalUrl = styled.h2``;
const ShortenedUrl = styled.h2``;
const VisitCount = styled.h2`
  margin-right: 40px;
`;
