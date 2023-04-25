import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Card} from 'react-bootstrap';
import {TestButton, PrimaryButton} from './Components/Buttons';
import HomePage from './pages/home_page';
import {BrowserRouter as BrowserRouter, Routes,  Route} from "react-router-dom"

function App() {
 return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" exact element = {< HomePage />} />
      {/* <Route path = "/abc" exact element = {< AboutPage />} />*/}
      <Route path = "*" exact element = {"404 NOT FOUND"} />
    </Routes>
    </BrowserRouter>
  );
} 

export default App;
