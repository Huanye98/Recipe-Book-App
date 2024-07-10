import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import RecipesList from './components/RecipesList'

function HomePage() {
  return (
    <div >
        <Navbar/>
        <RecipesList/>
        <Sidebar/>
        <Footer/>
    </div>
  )
}

export default HomePage