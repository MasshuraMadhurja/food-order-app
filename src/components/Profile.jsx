import React, { useState } from 'react'

const Profile = (props) => {
  const [count,setCount]=useState(0)
  return (
  <>
    <div>Profile</div>
    <h4>Name: {props.name}</h4>
    <h4>XYZ: {props.xyz}</h4>
    <h5>Count: {count}</h5>
    <button onClick={()=>setCount(count+1)}>count</button>
    </>
  )
}

export default Profile;