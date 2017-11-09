import React, { Component } from 'react'
import axios from 'axios'

class Meetups extends Component {
  constructor() {
    super()
    this.state = {
      meetups: []
    }
    this.getMeetups()
  }

  getMeetups() {
    axios.get('http://localhost:3000/api/meetups')
      .then(response => {
        this.setState({ meetups: response.data }, () => {
          console.log(response.data)
        })
      })
  }

  render() {
    const meetupItems = this.state.meetups.map((meetup, i) => {
      console.log(i)
      return (
        <li className="collection-items" key={meetup.id}>{meetup.name}</li>
      )
    })

    return (
      <div>
        <h1>Meetups</h1>
        <ul className="collection">
          {meetupItems}
        </ul>
      </div>
    )
  }
}

export default Meetups