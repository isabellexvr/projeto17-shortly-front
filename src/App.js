import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResetCss } from "./ResetCss";
import RankingPage from "./components/RankingPage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import TokenProvider from "./contexts/TokenContext";

function App() {
  return (
    <TokenProvider>
      <BrowserRouter>
        <ResetCss />
        <Routes>
          <Route path="/" element={<RankingPage />} />
          <Route path="/sign-up" element={<RegisterPage />} />
          <Route path="/sign-in" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </TokenProvider>
  );
}

export default App;
