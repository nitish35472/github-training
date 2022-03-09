
import './App.css';
// import Header from './Components/Header';
import React from 'react'

//import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Data from './Pages/Data';
import Edit from './Pages/Edit';
import Register from './Pages/Register';
import Navbar from './Components/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <center>
      {/* <Header /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Data" element={<Data />} />
          <Route path="/Edit/:id" element={<Edit />} >
            {/* <Route path=":EditID" element={<Edit />} /> */}
          </Route>
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
      <ToastContainer />
    </center >
  )
}

export default App

