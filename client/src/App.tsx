import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import About from './pages/about';
import RockPaperScissors from './pages/rockPaperScissors';
import ModellingGallery from './pages/modellingGallery';
import StickersShop from './pages/stickersShop';
import GlobalCtx from './context/globalCtx';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/globalStyle';
import StickersShopCategory from './pages/stickersShopCategory';
import StickersShopProduct from './pages/stickersShopProduct';
import { PAGE } from './enums/page.enum';
import Cv from './pages/cv';

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
              <Route path={PAGE.ABOUT_PATH} element={<About />} />
              <Route path={PAGE.PROJECT1_PATH} element={<ModellingGallery />} />
              <Route
                path={PAGE.PROJECT2_PATH}
                element={<RockPaperScissors />}
              />
              <Route path={PAGE.PROJECT3_PATH} element={<StickersShop />}>
                <Route path=':collection' element={<StickersShopCategory />} />
                <Route
                  path=':collection/:id'
                  element={<StickersShopProduct />}
                />
              </Route>
              <Route path={PAGE.CV_PATH} element={<Cv />} />
            </Routes>
          </main>
          <Footer />
        </ThemeProvider>
      )}
    </>
  );
};

export default App;
