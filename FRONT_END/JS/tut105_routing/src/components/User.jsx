import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const params=useParams()
  return (
    <div>
      THis is aaluuu user named {params.username}
    </div>
  )
}

export default User
