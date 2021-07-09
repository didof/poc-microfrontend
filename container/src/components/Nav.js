import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Products</Link>
        </li>
        <li>
          <Link to='/auth'>Auth</Link>
        </li>
      </ul>
    </nav>
  )
}
