import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class MeetupDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            details: ''
        }
    }

    render() {
        return (
            <div>
                <br />
                <Link className="btn grey" to="/">Back</Link>
                <h1>Details</h1>
            </div>
        )
    }

}

export default MeetupDetails