import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function HomePage() {
  return (
    <div >
        <Navbar/>
        <Sidebar/>
        <Footer/>
    </div>
  )
}

export default HomePage