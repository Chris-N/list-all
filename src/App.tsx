import * as React from 'react';
import { Home } from './components/Home/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AddItem } from 'components/AddItem/AddItem';
import { Item } from 'types';
import importedItems from 'data/items.json';

function App() {
  const [items, setItems] = React.useState<Item[]>(importedItems.data);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home items={items} setItems={setItems} />} />
        <Route path='/add' element={<AddItem items={items} setItems={setItems} />} />
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
