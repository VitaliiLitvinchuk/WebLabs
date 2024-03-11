import React from 'react';
import { Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import './App.css';
import Layout from './components/containers/Layout';
import Lab5Table from './components/table';
import HomePage from './components/home-page';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/lab5table' element={<Lab5Table />} />
      </Route>
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
