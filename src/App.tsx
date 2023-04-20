import React from 'react';
import './App.css';
import Form from './components/form/form';
import {Route, Routes} from 'react-router-dom';
import FrontPage from './components/front/front';
import MyList from './components/list/list';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Form />} />
      <Route path='/new' element={<FrontPage />} />
      <Route path='/list' element={<MyList />} />
    </Routes>
  );
}

export default App;
