import * as React from 'react';
import { Home } from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/add'
          element={
            <div>
              <p>Add Screen</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
