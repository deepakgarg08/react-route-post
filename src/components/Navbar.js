import React from 'react';
import { Link, NavLink , withRouter} from 'react-router-dom'

class Navbar extends React.Component {
  render() {

  console.log("check props navbar:", this.props)

    return (
      <nav className="nav-wrapper red-darken-3">
        <div className="container">
          <Link className="brand-logo" to="/"> Poko' Themes</Link>
          <ul className="right">
            {/* <li><a href="/">Home</a></li>
            <li><a href='/About'>About</a></li>
            <li><a href='/Contact'>Contact</a></li> */}
            
            <li><NavLink exact to="/">Home</NavLink>  </li>
            <li><NavLink  to="/about">About</NavLink>  </li>
            <li><NavLink to="/contact">Contact</NavLink>  </li>
          </ul>
        </div>
      </nav>
    )

  }
}

export default withRouter(Navbar);
