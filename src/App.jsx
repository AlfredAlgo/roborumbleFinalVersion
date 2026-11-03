import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RoboWars from './pages/RoboWars';
import GrandPrix from './pages/GrandPrix';
import Drone from './pages/Drone';
import Register from './pages/Register';

const pages = { home: Home, robowars: RoboWars, grandprix: GrandPrix, drone: Drone, register: Register };

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [pageKey, setPageKey] = useState(0);

  const navigate = (id) => {
    setCurrentPage(id);
    setPageKey(k => k + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const titles = { home: 'ROBO-RUMBLE 2027 — Innovation in Motion', robowars: 'Robo Wars — ROBO-RUMBLE 2027', grandprix: 'RoboGrand Prix — ROBO-RUMBLE 2027', drone: 'Drone Racing — ROBO-RUMBLE 2027', register: 'Register — ROBO-RUMBLE 2027' };
    document.title = titles[currentPage] || titles.home;
  }, [currentPage]);

  const PageComponent = pages[currentPage] || Home;

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      <main key={pageKey}>
        <PageComponent onNavigate={navigate} />
      </main>
    </>
  );
}
