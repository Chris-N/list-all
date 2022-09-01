import * as React from 'react';
import { Home } from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddItem } from 'components/AddItem/AddItem';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
