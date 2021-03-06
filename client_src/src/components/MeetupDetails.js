import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Navbar from './Navbar'

class MeetupDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            details: ''
        }
        const access_token = localStorage.getItem('access_token')
        this.getMeetup(access_token)
    }

    getMeetup(access_token) {
        let meetupId = this.props.match.params.id

        axios.get(`http://localhost:3000/api/meetups/${meetupId}`, { params: { access_token } })
            .then(response => {
                this.setState({ details: response.data }, () => {
                    // console.log(this.state.details)
                })
            })
            .catch(err => console.log(err))
    }

    onDelete() {
        let meetupId = this.props.match.params.id

        axios.request({
            method: 'delete',
            url: `http://localhost:3000/api/meetups/${meetupId}`,
        }).then(response => {
            this.props.history.push('/')
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <br />
                    <Link className="btn grey" to="/">Back</Link>
                    <h1>{this.state.details.name}</h1>
                    <ul className="collection">
                        <li className="collection-item">City: {this.state.details.city}</li>
                        <li className="collection-item">Address: {this.state.details.address}</li>
                    </ul>
                    <Link className="btn" to={`/meetups/edit/${this.state.details.id}`}>Edit</Link>
                    <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
                </div>
            </div>
        )
    }

}

export default MeetupDetails