import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import About from './pages/about';
import Project1 from './pages/project1';
import Project2 from './pages/project2';
import Project3 from './pages/project3';
import GlobalCtx from './context/globalCtx';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/globalStyle';

const App = () => {
  const { theme } = useContext(GlobalCtx);

  return (
    <>
      {theme && (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
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
          <Footer />
        </ThemeProvider>
      )}
    </>
  );
};

export default App;
