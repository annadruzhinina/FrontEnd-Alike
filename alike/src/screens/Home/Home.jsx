import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className='home-container'>
      <div>
        <Link to="/sign-in" className="sign-in" />
        <Link to="/" className="profile" />
      </div>
    </section>
  )
}

export default Home