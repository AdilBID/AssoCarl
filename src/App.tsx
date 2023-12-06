import "./scss/main.scss";
// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/header';
import Home from './Pages/Home';
import NosActions from './Pages/NosActions';
import NousSoutenir from './Pages/NousSoutenir';
import NotreEquipe from './Pages/NotreEquipe';
import FaireUnDon from './Pages/FaireUnDon';
import NotFoundPage from './Pages/NotFoundPage';


const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nos-actions" element={<NosActions />} />
        <Route path="/nous-soutenir" element={<NousSoutenir />} />
        <Route path="/notre-equipe" element={<NotreEquipe />} />
        <Route path="/faire-un-don" element={<FaireUnDon />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
