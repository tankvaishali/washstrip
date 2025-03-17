import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'animate.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Howto from './Components/HowTo/Howto';
import Product from './Components/Product/Product';
import Details from './Components/Product/Details';
import ScrollToTop from './Components/HOC/ScrollToTop';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/howto' element={<Howto />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:id' element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
