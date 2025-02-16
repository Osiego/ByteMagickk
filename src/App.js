import logo from './logo.svg';
import './App.css';
import Page from './Home/index.jsx'; //
import AboutUs from './about-us/index.jsx';
import { Navbar1 } from './Home/components/Navbar1';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/About-Us" element={<AboutUs />} />  {/* Define /about route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
