import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext) // setUser = ../context/UserContext'

    if(!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>

  return (
    <div>
      Profile
    </div>
  )
}

export default Profile
