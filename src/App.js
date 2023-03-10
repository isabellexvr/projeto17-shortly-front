import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResetCss } from "./ResetCss";
import RankingPage from "./components/RankingPage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import UserInfoProvider from "./contexts/UserInfo";
import HomePage from "./components/HomePage";

function App() {
  return (
    <UserInfoProvider>
      <BrowserRouter>
        <ResetCss />
        <Routes>
          <Route path="/" element={<RankingPage />} />
          <Route path="/sign-up" element={<RegisterPage />} />
          <Route path="/sign-in" element={<LoginPage />} />
          <Route path="/me" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </UserInfoProvider>
  );
}

export default App;
