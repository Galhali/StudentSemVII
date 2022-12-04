
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component }  from 'react';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddStudent from './students/AddStudent';
import EditStudent from './students/EditStudent';
import ViewStudent from './students/ViewStudent';

function App() {
  return (
    <div className="App">
      <div className="App">
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/addStudent" element={<AddStudent/>}/>
                <Route exact path="/editStudent/:id" element={<EditStudent/>}/>
                <Route exact path="/viewStudent/:id" element={<ViewStudent/>}/>
            </Routes>          
        </Router>      
    </div>

    </div>
  );
}

export default App;
