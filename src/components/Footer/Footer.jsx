import React from 'react'
import './footer.css'
import { AiFillInstagram, AiFillTwitterSquare, AiFillFacebook, AiFillRedditSquare } from 'react-icons/ai'

function Footer() {
  return (
    <>
      <footer className="footer-container">
        footer
        <br />
        this is it
        <br />
        hello
        <div className='footer-icons'>
          <AiFillInstagram />
          <AiFillTwitterSquare />
          <AiFillFacebook />
          <AiFillRedditSquare />
        </div>
      </footer>
    </>
  )
}

export default Footer