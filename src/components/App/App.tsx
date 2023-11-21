import '../../scss/app.scss';

import { Header } from '../Header/Header';
import { Home } from '../../pages/Home/Home';
import { NotFound } from '../../pages/NotFound/NotFound';
import { Cart } from '../../pages/Cart/Cart';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

export const App = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};
