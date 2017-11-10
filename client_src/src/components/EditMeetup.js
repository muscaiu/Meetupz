import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class EditMeetup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            name: '',
            city: '',
            address: ''
        }
        const access_token = localStorage.getItem('access_token')
        this.getMeetupDetails(access_token)
    }

    getMeetupDetails(access_token) {
        let meetupId = this.props.match.params.id

        axios.get(`http://localhost:3000/api/meetups/${meetupId}`, { params: { access_token } })
            .then(response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    city: response.data.city,
                    address: response.data.address
                }, () => {
                    // console.log(this.state)
                })
            })
            .catch(err => console.log(err))
    }

    editMeetup(newMeetup) {
        axios.request({
            method: 'put',
            url: `http://localhost:3000/api/meetups/${this.state.id}`,
            data: newMeetup
        }).then(response => {
            this.props.history.push('/')
        }).catch(err => console.log(err))
    }

    onSubmit(e) {
        e.preventDefault()
        const newMeetup = {
            name: this.refs.name.value,
            city: this.refs.city.value,
            address: this.refs.address.value
        }
        this.editMeetup(newMeetup)
    }

    handleInputChange(e) {
        const value = e.target.value
        const name = e.target.name

        this.setState({
            //name is a variable
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <h1>Edit</h1>
                <br />
                <Link className="btn grey" to="/">Back</Link>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input
                            value={this.state.name}
                            onChange={this.handleInputChange.bind(this)}
                            type="text" name="name" ref="name" />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field">
                        <input
                            value={this.state.city}
                            onChange={this.handleInputChange.bind(this)}
                            type="text" name="city" ref="city" />
                        <label htmlFor="city">City</label>
                    </div>
                    <div className="input-field">
                        <input
                            value={this.state.address}
                            onChange={this.handleInputChange.bind(this)}
                            type="text" name="address" ref="address" />
                        <label htmlFor="address">Address</label>
                    </div>
                    <input type="submit" value="Save" className="btn" />
                </form>
            </div>
        )
    }
}

export default EditMeetup
