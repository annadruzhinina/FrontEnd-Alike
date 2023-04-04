import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUser, registerUser } from '../../services/userApi'
import './signup.css'

function SignUp({ setUser, user }) {
  const [error, setError] = useState('')
  let navigate = useNavigate()
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    re_password: '',
    valid: false
  })

  const passwordValidation = pw => {
    // Variables for numbers and special characters
    const specialChar = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g
    const numChar = /\d/
    // Validate the password has the below criteria
    if (pw.length >= 6 && specialChar.test(pw) && numChar.test(pw)) {
      return true
    }
    // If it does not, return false
    setError(
      'Password must contain at least 6 letters and must include a Number and Special Character'
    )
    return false
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (userData.password === '') {
      setError('Please Enter a valid username and password')
    } else if (
      userData.password === userData.re_password &&
      passwordValidation(userData.password)
    ) {
      setUserData(prev => ({
        ...prev,
        valid: true
      }))
      try {
        await registerUser(userData)
        let response = await getUser()
        setUser(response)
        window.localStorage.setItem('username', userData.username)
        navigate('/home')
      } catch {
        setError('User or Email Already Exists')
      }
    } else if (!passwordValidation(userData.password)) {
      setError('Password does not meet requirements')
    } else {
      setError('Passwords do not match')
    }
  }

  function handleBackClick() {
    let path = `/`
    navigate(path)
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
        <div className='landing-content'>
          <h2 className='landing-title'>
            Social Media Is Better When You Can Relate{' '}
          </h2>
          <form className='signup-form' onSubmit={handleSubmit}>
            <h1 className='SigninLogo'>Sign Up</h1>
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
              className='email'
              id='email'
              type='text'
              name='email'
              placeholder='Email'
              value={userData.email}
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
            <input
              id='pwConfirm'
              type='password'
              name='re_password'
              placeholder='Confirm Password'
              value={userData.re_password}
              onChange={handleChange}
            />
            <div className='pw-requirements'>
              <p>Password must contain at least:</p>
              <ul>
                <li>Six characters</li>
                <li>One number</li>
                <li>One special character</li>
              </ul>
            </div>
            <button
              onClick={handleBackClick}
              id='submitCredential'
              type='submit'
              value='submit'
            >
              Back
            </button>

            <button id='submitCredentials' type='submit' value='submit'>
              Submit
            </button>
            <div className='sign-up__password'>{error}</div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp
