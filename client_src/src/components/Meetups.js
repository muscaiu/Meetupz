import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import MeetupItem from './MeetupItem'
import Navbar from './Navbar'

class Meetups extends Component {
  constructor() {
    super()
    this.state = {
      meetups: [],
    }

    const access_token = localStorage.getItem('access_token')
    this.getMeetups(access_token)
  }

  getMeetups(access_token) {
    axios.get('http://localhost:3000/api/meetups', {
      params: {
        access_token
      }
    })
      .then(response => {
        this.setState({ meetups: response.data }, () => {
          // console.log(response.data)
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    const meetupItems = this.state.meetups.map((meetup, i) => {
      return (
        <MeetupItem item={meetup} key={meetup.id} />
      )
    })

    return (
      <div>
        <Navbar />
        <div className="container">
          <h1>O</h1>
          <ul className="collection">
            {meetupItems}
          </ul>
        </div>
        <div className="fixed-action-btn">
          <Link to="/meetups/add" className="btn-floating btn-large red">
            <i className="fa fa-plus"></i>
          </Link>
        </div>
      </div>
    )
  }
}

export default Meetups