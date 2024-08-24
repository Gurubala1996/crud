import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Crud from './components/Crud';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Status } from './components/Status';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

<BrowserRouter>
<Routes>

<Route path='/' element ={<Crud/>} />
<Route path='/status/:id' element ={<Status />} />


    
    

</Routes>
</BrowserRouter>
  <ToastContainer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
