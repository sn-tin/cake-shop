import Navbar from './components/Navbar/Navbar';
import Cta from './components/Cta/Cta';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CakeDetails from './components/Cakes/CakeDetails';
import { useStateContext } from './context/StateContextProvider';
import About from './components/About/About';
import Orders from './components/Orders/Orders';
import { useEffect } from 'react';

function App() {
  const { showCart } = useStateContext()
  useEffect(() => {
    document.querySelector("body").style.overflow = showCart ? "hidden" : "visible";
  },[showCart])
  return (
      <BrowserRouter>
        <Navbar />
        { showCart && <Orders />}
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/cakes/:slug' element={<CakeDetails />}></Route>
        </Routes>
        <Cta />
        <Footer />
      </BrowserRouter>
  );
}

export default App;
