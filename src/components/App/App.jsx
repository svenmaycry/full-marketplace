import '../../scss/app.scss';

import React from 'react';
import { Header } from '../Header/Header';
import { Home } from '../../pages/Home/Home';
import { NotFound } from '../../pages/NotFound/NotFound';
import { Cart } from '../../pages/Cart/Cart';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

export const SearchContext = React.createContext();

export const App = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
};
