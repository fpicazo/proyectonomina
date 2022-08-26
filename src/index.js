import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TableUsers from './tables/TableUsers';
import App2 from './App2'
import Layout from './Layout';

/*
const root = createRoot(document.getElementById('root'))
root.render(<App />)*/

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App2 />} />
            <Route path="users" element={<TableUsers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);

