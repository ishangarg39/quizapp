import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Result() {
    const location=useLocation();

  return (
    <div>
      <h1>Number of Correct Answers</h1>
<h2>{location.state.Q}</h2>
    </div>
  )
}
