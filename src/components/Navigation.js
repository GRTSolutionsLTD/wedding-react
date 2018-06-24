import React from 'react'
import { Link } from 'react-router'

const Navigation = ({ className, buttonClassName }) =>
  <nav className={className}>
    <Link className={buttonClassName} to="/">
      Register
    </Link>
    {/* reduser  בלינק מקשרים ל */}
    <Link className={buttonClassName} to="todo">
      Todo
    </Link>
    <Link className={buttonClassName} to="matcher">
    matcher
    </Link>
    <Link className={buttonClassName} to="details">
    details
    </Link>
  </nav>

Navigation.defaultProps = {
  className: '',
  buttonClassName: 'c-button'
}

export default Navigation
