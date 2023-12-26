import '../../scss/app.scss';

import { Home } from '../../pages/Home/Home';
import { NotFound } from '../../pages/NotFound/NotFound';
import { Cart } from '../../pages/Cart/Cart';
import { Routes, Route } from 'react-router-dom';
import { FullFlower } from '../../pages/FullFlower/FullFlower';
import { MainLayout } from '../Layouts/MainLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="flower/:id" element={<FullFlower />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
