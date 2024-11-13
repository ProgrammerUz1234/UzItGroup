import React, { Suspense } from 'react';
import './app.scss';
import Preloader from './components/Preloader/Preloader';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ThemeCTX from './context/ThemeCTX';

export function App() {
  const [openBurger, setOpenBurger] = React.useState(false);
  // const [modalActive, setModalActive] = React.useState(true);
  React.useEffect(() => {
    AOS.init();
  });

  React.useEffect(() => {
    AOS.refresh();
  }, []);


  return (
    <ThemeCTX>
      {' '}
      <Suspense fallback="loading">
        <Routes>
          <Route
            path="/"
            element={<Layout openBurger={openBurger} setOpenBurger={setOpenBurger} />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </ThemeCTX>
  );
}
