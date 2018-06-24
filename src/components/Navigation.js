import React from 'react'
import { Link } from 'react-router'


import React from 'react'
import { Link } from 'react-router'

const Navigation = ({ className, buttonClassName }) =>
  <nav className={className}>
    <Link className={buttonClassName} to="/">
      Home
    </Link>
    {/* reduser  בלינק מקשרים ל */}
    <Link className={buttonClassName} to="todo">
      Todo
    </Link>
    <Link className={buttonClassName} to="matcher">
    details
    </Link>
    <Link className={buttonClassName} to="details">
      Weather
    </Link>
  </nav>

Navigation.defaultProps = {
  className: '',
  buttonClassName: 'c-button'
}

export default Navigation
