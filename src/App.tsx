import React from 'react';
import './App.css';
import Form from './components/form';
import {Route, Routes} from 'react-router-dom';
import FrontPage from './components/front';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Form />} />
      <Route path='/new' element={<FrontPage />} />
    </Routes>
  );
}

export default App;
