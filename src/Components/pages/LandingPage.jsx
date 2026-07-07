import React from 'react'
import Navbar from '../Navbar'
import Header from '../Header'
import Footer from '../Footer'
import Client from '../Client'
import AllBooks from '../AllBooks'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AllBooks />
      <Client />
      <Footer />
    </div>
  )
}

export default LandingPage