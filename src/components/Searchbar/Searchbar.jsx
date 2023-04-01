import React from 'react'
import * as BiIcons from 'react-icons/bi'
import './Searchbar.css'

export default function Searchbar({ setSearchInput }) {
  return (
    <div className='search-wrapper'>
      <div className='search'>
        <input
          type='text'
          onChange={e => setSearchInput(e.target.value)}
          className='searchTerm'
          placeholder='Search posts'
        />
        <div className='searchButton'>
          <BiIcons.BiSearch className='navbar-menu__icon' />
        </div>
      </div>
    </div>
  )
}
