
import './App.scss';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

import React from "react";

import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Particle from './Components/Particle';


function App() {


    return (
        <Router>
            <div className="App">

                <div className='Wrapper'>
                    <Particle />



                    <Header/>
                    <Home  />

                    <Routes>
                        <Route path='/123' element={<Header />}/>


                    </Routes>

                </div>
            </div>
        </Router>
    );
}

export default App;
