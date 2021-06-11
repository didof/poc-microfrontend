import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div>
      <h2>All products</h2>
      <Link to='/discount'>Go to discounts</Link>
    </div>
  )
}
