import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './style.scss';
import Home from './pages/Homepage';
import MainLayout from './components/MainLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import ContectPage from './pages/contectPage';
import MenuPage from './pages/menuPage';
import AboutPage from './pages/aboutPage';
import Cart from './pages/cart';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'contect', element: <ContectPage /> },
        { path: 'menu', element: <MenuPage />  },
        { path: 'about', element: <AboutPage /> },
        { path: 'cart', element: <Cart/> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
