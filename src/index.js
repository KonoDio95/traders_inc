import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';
import ErrorPage from './routes/ErrorPage';
import Login from './routes/Login';
import Register from './routes/Rster';
import Produtos from './routes/Produtos';
import About from './routes/About';
import Team from './routes/Team';

const router = createBrowserRouter([
  {
    path:"/", element:<App />,
    errorElement:<ErrorPage />,
    children: [
      {
        path:"/", element: <Home />,
      },
      {
        path:"contact", element: <Contact />,
      },  
      {
        path:"about", element: <About />,
      },
      {
        path:"team", element: <Team />,
      },     
      {
        path:"login", element: <Login />,
      }, 
      {
        path:"register", element: <Register />,
      }, 
      {
        path:"produto/:id", element: <Produtos />,
      },  
    ]
  }, 
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
