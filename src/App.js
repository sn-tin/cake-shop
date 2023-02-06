import Navbar from './components/Navbar/Navbar';
import Cta from './components/Cta/Cta';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Router, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Router path='/' element={<LandingPage />}></Router>
          <Router path='/cakes/:slug'></Router>
        </Routes>
        <Cta />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
