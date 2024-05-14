import React from 'react'
import Avatar from '../../assets/avatar2.jpeg'
const UserAccount = ({image}) => {
  return (
    <div className=''>
      <img className='w-14 h-14 object-cover rounded-full border' src={Avatar} alt="logo" />
    </div>
  )
}

export default UserAccount