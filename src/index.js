import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/css/index.css';
import router from './routes';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


export default function App(){
  const x = [];
  localStorage.setItem('cart',JSON.stringify(x));
  
  return(
    <RouterProvider router={router} />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




