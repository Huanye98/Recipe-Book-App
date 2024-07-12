import React from 'react'
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"
function NotFoundPage() {
  return (
    <div id='not-found-page'>
      
        <Navbar/>
        <h1 id='sorry'>Sorry, it seems you are in the wrong place!</h1>
        <Sidebar/>
        <Footer/>
      
    </div>
  )
}

export default NotFoundPage