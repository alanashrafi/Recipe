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
import { EditPage } from './pages/EditPage';

function App() {
  return (
    <Context>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="details/:id" element={<Details />}></Route>
            <Route path="details/:id/edit" element={<EditPage />}></Route>
            <Route path="addRecipe" element={<AddRecipe />}></Route>
            <Route path="foods" element={<Foods />}></Route>
            <Route path="desserts" element={<Desserts />}></Route>
            <Route path="/" element={<Main />}></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </Context>
  );
}

export default App;
