import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Myform from './Myform';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Moviestable from './Moviestable';
import Login from './Screens/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "table",
        element: <Moviestable />,

      },
      {
        path: "form",
        element: <Myform />,

      },
     
    ],
  },
  {
    path: "login",
    element: <Login />,

  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
