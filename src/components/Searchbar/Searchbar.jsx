import React from 'react'
import * as BiIcons from 'react-icons/bi'
import './Searchbar.css'

export default function Searchbar({ searchPosts }) {
  return (
    <div class='search-wrapper'>
      <div class='search'>
        <input
          type='text'
          onchange={e => searchPosts(e.target.value)}
          class='searchTerm'
          placeholder='Search posts'
        />
        <button class='searchButton'>
          <BiIcons.BiSearch className='navbar-menu__icon' />
        </button>
      </div>
    </div>
  )
}
