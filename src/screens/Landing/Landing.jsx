import React, { useState } from 'react'
import SignUp from '../../components/SignUp/SignUp.jsx'
import Button from '@mui/material/Button'
import './landing.css'

import { useNavigate } from 'react-router-dom'
import { loginUser, getUser } from '../../services/userApi'

function Landing({ setUser }) {
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({
    username: '',
    password: null,
    message: ''
  })
  const navigate = useNavigate()

  //CHECK MERGE
  function handleSignUpClick() {
    navigate(`/sign-up`)
  }

  const handleSubmit = async e => {
    // Prevent Page from Reloading
    e.preventDefault()
    // Update User with Values
    if (userData.password === '') {
      setError('Password Field Required')
    } else {
      try {
        await loginUser(userData)
        window.localStorage.setItem('username', userData.username)
        let response = await getUser()
        setUser(response)
        if (
          window.localStorage.getItem('knox') &&
          window.localStorage.getItem('knox') !== 'undefined'
        ) {
          navigate('/home')
        }
      } catch (error) {
        setError('Username or Password Incorrect')
      }
    }
  }

  const handleChange = e => {
    const { name, value } = e.target

    setUserData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
      <div className='landing-home-header'>
        <img
          className='landing-home-header-image'
          src='./image/logo.png'
          alt='Alike logo'
        />
        <span>Alike</span>
      </div>
      <div className='landing'>
        <div className='landig-content'>
          <h2 className='landing-title'>
            We believe that motivation is the key to success
          </h2>
          <form className='form' onSubmit={handleSubmit}>
            <h1 className='SigninLogo'>Sign In</h1>
            <input
              className='username'
              id='username'
              type='text'
              name='username'
              placeholder='Username'
              value={userData.username}
              onChange={handleChange}
            />
            <input
              id='pw'
              type='password'
              name='password'
              placeholder='Password'
              value={userData.password}
              onChange={handleChange}
            />
            <button id='submitCredentials' type='submit' value='submit'>
              Login
            </button>
            <button onClick={handleSignUpClick} id='submitCredentials'>
              SignUp
            </button>
            <div className='loginErrorMessage'>{error}</div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Landing
