import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import NotFound from './NotFound';

const App = function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductDetails />} />
      <Route path="products/:id" element={<ProductDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
