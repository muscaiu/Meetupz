import React, { Component } from 'react'
import axios from 'axios'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleInputChange(e) {
        const value = e.target.value
        const name = e.target.name

        this.setState({
            //name is a variable
            [name]: value
        })
    }

    onSubmit(e) {
        e.preventDefault()
        const loginData = {
            email: this.refs.email.value,
            password: this.refs.password.value,
        }
        this.submitLogin(loginData)
    }

    submitLogin(loginData) {
        axios.request({
            method: 'post',
            url: `http://localhost:3000/api/Users/login`,
            data: loginData
        }).then(response => {
            if (response.data.id) {
                console.log('logged')
                localStorage.setItem('access_token', response.data.id)
                this.props.history.push('/')
            } else {
                console.log(response)
            }
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <br />
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input
                            value={this.state.email}
                            onChange={this.handleInputChange.bind(this)}
                            type="text" name="email" ref="email" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input
                            value={this.state.password}
                            onChange={this.handleInputChange.bind(this)}
                            type="text" name="password" ref="password" />
                        <label htmlFor="password">Password</label>
                    </div>
                    <input type="submit" value="Login" className="btn" />
                </form>
            </div >
        )
    }
}

export default Login
