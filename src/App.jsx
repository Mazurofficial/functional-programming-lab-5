import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Main from './pages/Main';

const App = () => {
   return (
      <Routes>
         <Route path="/" element={<Main />} />
         <Route path="/about" element={<About />} />
      </Routes>
   );
};

export default App;
