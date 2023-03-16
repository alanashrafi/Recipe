import React from 'react';
import './App.css';
import { Main } from './pages/Main';
import { Footer } from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddRecipe } from './pages/AddRecipe';
import { Navbar } from './components/Navbar';
import { Foods } from './pages/Foods';
import { Desserts } from './pages/Desserts';
import { Details } from './pages/Details';
import { Context } from './Context';

function App() {
  return (
    <Context>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="addRecipe" element={<AddRecipe />}></Route>
            <Route path="foods" element={<Foods />}></Route>
            <Route path="desserts" element={<Desserts />}></Route>
            <Route path="details" element={<Details />}></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </Context>
  );
}

export default App;
