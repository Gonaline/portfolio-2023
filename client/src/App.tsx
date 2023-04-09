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
import Project3Category from './pages/project3Category';
import { PAGE } from './enums/page.enum';
import Project3Product from './pages/project3Product';

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
              <Route path='/' element={<About />} />
              <Route path={PAGE.ABOUT_PATH} element={<About />} />
              <Route path={PAGE.PROJECT1_PATH} element={<Project1 />} />
              <Route path={PAGE.PROJECT2_PATH} element={<Project2 />} />
              <Route path={PAGE.PROJECT3_PATH} element={<Project3 />}>
                <Route path=':collection' element={<Project3Category />} />
                <Route path=':collection/:id' element={<Project3Product />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </ThemeProvider>
      )}
    </>
  );
};

export default App;
