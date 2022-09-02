import * as React from 'react';
import { Home } from './components/Home/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AddItem } from 'components/AddItem/AddItem';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddItem />} />
        <Route
          path='*'
          element={
            <div>
              <p>Please return home</p>
              <Link to='/'>Home</Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
