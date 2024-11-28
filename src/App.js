
import './App.css';
import Hero from './components/Hero';
import MySlider from './components/common/MySlider';
import Slider from './components/common/Slider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/view/Home';
import About from './components/view/About' 

function App() {
  return (
    <div>
      <Hero />
      <About />
      <MySlider />
      <Slider />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
