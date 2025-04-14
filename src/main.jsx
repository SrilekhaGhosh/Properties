import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Insight from './components/Insight/Insight.jsx';
import LoginPage from './components/login/Login.jsx';
import Wishlist from './components/wishlist/Wishlist.jsx';
import ProceedToPay from './components/ProceedToPay.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='insight' element={<Insight />} />
      <Route path='contact' element={<Contact />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='wishlist' element={<Wishlist />} />
      <Route path="proceed-to-pay" element={<ProceedToPay />} />
      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
