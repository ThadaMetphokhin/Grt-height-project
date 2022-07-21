import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './page/Home';
import Layout from './page/Layout';
import Buyitem from './page/Buyitem';
import Contact from './page/Contact';
import Information from './page/Information';
import Information2 from './page/Information2';
import Nopage from './page/Nopage';

import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function MyHome() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="buyitem" element={<Buyitem />} />
          <Route path="contact" element={<Contact />} />
          <Route path="information" element={<Information />} />
          <Route path="information2" element={<Information2 />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('cannabisshop')).render(<MyHome />);
