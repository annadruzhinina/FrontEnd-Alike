import React from 'react'
import * as BiIcons from 'react-icons/bi'
import './Searchbar.css'

export default function Searchbar({ searchPosts }) {
  return (
    <div className='search-wrapper'>
      <div className='search'>
        <input
          type='text'
          onChange={e => searchPosts(e.target.value)}
          className='search-term'
          placeholder='Search by project title'
        />
        <div className='search-button'>
          <BiIcons.BiSearch className='search-icon' />
        </div>
      </div>
    </div>
  )
}
