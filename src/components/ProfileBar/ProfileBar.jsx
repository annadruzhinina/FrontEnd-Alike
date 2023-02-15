import React from 'react'
import './profilebar.css'
import { BarData } from './BarData.jsx'

function ProfileBar() {
  return (
    <div className='profileTainer'>
        <div className='profileAvatar'>
        <img src="./image/avatar.jpeg" alt="Avatar" />
        </div>
        <div className="friendsList">
            <h3>Suggested Users</h3>
            {BarData.map((data, index) => {
                return(
                    <div className='friendItem'>
                        <div className='friendPictainer'>
                            <img src={data.imageUrl} alt='Random'/>
                        </div>
                        <h4>{data.username}</h4>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ProfileBar;