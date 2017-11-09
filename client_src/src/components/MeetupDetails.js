import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class MeetupDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            details: ''
        }

        this.getMeetup()
    }

    getMeetup() {
        let meetupId = this.props.match.params.id

        axios.get(`http://localhost:3000/api/meetups/${meetupId}`)
            .then(response => {
                this.setState({ details: response.data }, () => {
                    console.log(this.state.details)
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <br />
                <Link className="btn grey" to="/">Back</Link>
                <h1>{this.state.details.name}</h1>
                <ul className="collection">
                    <li className="collection-item">City: {this.state.details.city}</li>
                    <li className="collection-item">Address: {this.state.details.address}</li>
                </ul>
            </div>
        )
    }

}

export default MeetupDetails