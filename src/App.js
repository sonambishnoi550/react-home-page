import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/view/Home'; 
import About from './components/view/About'; 
import MySlider from './common/MySlider';
import Slider from './common/Slider';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
               
                <Home />
                <MySlider />
                <Slider />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
