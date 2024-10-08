import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Middle from './components/Middle/Middle'


function App() {


  return (
    <>
      <div className='bg-[#160A3A] p-8'>
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <div className='p-8 bg-[#FAF6FF]'>
        <Middle></Middle>
      </div>
    </>

  )
}

export default App
