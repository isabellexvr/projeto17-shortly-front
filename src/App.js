import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ResetCss } from './ResetCss'
import RankingPage from './components/RankingPage';

function App() {
  return (
    <BrowserRouter>
      <ResetCss />
      <Routes>
        <Route path='/' element={<RankingPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
