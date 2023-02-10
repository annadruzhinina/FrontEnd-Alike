import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

function Home() {
  return (
    <section className='home-container'>
      <div>
        <Navbar />
        
      </div>
    </section>
  )
}

export default Home