import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Dashboard from './pages/Dashboard';
import JobDetails from "./components/JobDetails"; 
import Login from './pages/Login';

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
        </Routes>
    </>
  );
}

export default App;
