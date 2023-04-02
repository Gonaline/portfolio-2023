import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import About from './pages/about';
import Project1 from './pages/project1';
import Project2 from './pages/project2';
import Project3 from './pages/project3';
import pagesCtx from './context/pagesCtx';

const App = () => {
  const { dataPage } = useContext(pagesCtx);

  return (
    <>
      <Header color={dataPage.headerAndFooterColor} />
      <main>
        <Routes>
          <Route path='*' element={<About />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Project1 />} />
          <Route path='/rock-paper-or-scissors' element={<Project1 />} />
          <Route path='/modeling-gallery' element={<Project2 />} />
          <Route path='/stickers-shop' element={<Project3 />} />
        </Routes>
      </main>
      <Footer color={dataPage.headerAndFooterColor} />
    </>
  );
};

export default App;
