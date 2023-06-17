import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Model from "./components/Model"
import Header from './components/Header'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'


function App() {
  return(
    <div>
      <Model/>
      <Header/>
      <Navbar/> 
      <Main/>
      <Footer/>
    </div>
  ) 

}

export default App
