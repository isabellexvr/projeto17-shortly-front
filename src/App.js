import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResetCss } from "./ResetCss";
import RankingPage from "./components/RankingPage";
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <ResetCss />
      <Routes>
        <Route path="/" element={<RankingPage />} />
        <Route path="/sign-up" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
