import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Product from './Components/Pages/Product/Product';
import Howto from './Components/Pages/HowTo/Howto';
import Contact from './Components/Pages/Contact/Contact';
import About from './Components/Pages/About/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/howto' element={<Howto />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
