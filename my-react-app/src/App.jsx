import { useState } from 'react';
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
// import './App.css'
import { Routes } from 'react-router';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Routes>
        {/* <Route path="/" element={''} /> */}
      </Routes>
    </div>
  );
}

export default App;
