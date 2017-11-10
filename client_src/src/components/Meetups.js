import React, { Component } from 'react'
import axios from 'axios'

import MeetupItem from './MeetupItem'

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
        <h1>O</h1>
        <ul className="collection">
          {meetupItems}
        </ul>
      </div>
    )
  }
}

export default Meetups