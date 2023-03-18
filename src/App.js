import Navbar from './components/Navbar/Navbar';
import Cta from './components/Cta/Cta';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CakeDetails from './components/Cakes/CakeDetails';
import StateContextProvider, { useStateContext } from './context/StateContextProvider';
import About from './components/About/About';
import Orders from './components/Orders/Orders';
import { useEffect } from 'react';

function App() {
  return (
    <StateContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/cakes/:slug' element={<CakeDetails />}></Route>
        </Routes>
        <Cta />
        <Footer />
      </BrowserRouter>
    </StateContextProvider>
  );
}

export default App;
