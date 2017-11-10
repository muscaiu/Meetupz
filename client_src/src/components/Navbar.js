import React, { Component } from 'react'
import { Link  } from 'react-router-dom'
import axios from 'axios'
class Navbar extends Component {

  handleLogout() {
    let access_token = localStorage.getItem('access_token')

    axios.post(`http://localhost:3000/api/Users/logout?access_token=${access_token}`)
      .then(function (response) {
        if (response.status === 204) {
          localStorage.clear();
          // <Redirect to="/login" push />
          this.props.history.push('/login')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">O</a>
            <a data-activates="main-menu" className="button-collapse show-on-large"><i className="fa fa-bars"></i></a>

            <ul className="right hide-on-small-only">
              <li>
                <Link to='/login'>
                  {/* <i className="fa fa-users"></i> */}
                  Login
                </Link>
              </li>
            </ul>
            <ul className="right hide-on-small-only">
              <li>
                <a onClick={this.handleLogout.bind(this)}>
                  LogOut
                </a>
              </li>
            </ul>

            <ul className="side-nav" id="main-menu">
              <li>
                <Link to='/'>
                  <i className="fa fa-users"></i>
                  Meetups
                </Link>
              </li>
              <li>
                <Link to='/meetups/add'>
                  <i className="fa fa-plus"></i>
                  Add Meetup
                </Link>
              </li>
              <li>
                <Link to='/about'>
                  <i className="fa fa-question-circle"></i>
                  About
                </Link>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar