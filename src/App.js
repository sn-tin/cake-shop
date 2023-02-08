import Navbar from './components/Navbar/Navbar';
import Cta from './components/Cta/Cta';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CakeDetails from './components/Cakes/CakeDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/cakes/:slug' element={<CakeDetails />}></Route>
        </Routes>
        <Cta />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
