import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Meetups from './Meetups'
import About from './About'
import MeetupDetails from './MeetupDetails'
import AddMeetup from './AddMeetup'
import EditMeetup from './EditMeetup'
import Login from './Login'

function PrivateRoute({ component: Component, authed, ...rest }) {
  console.log(authed)
  return (
    <Route {...rest} render={props => (
      localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
        )
    )} />
    // authed === true
    //   ? <Component {...props} />
    //   : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    // />
  )
}

class Routes extends Component {
  render() {
    return (
      // const Main = () => (
      <Switch>
        <Route exact path='/' component={Meetups} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute authed={false} exact path='/about' component={About} />
        <PrivateRoute authed={false} exact path='/meetups/add' component={AddMeetup} />
        <PrivateRoute authed={false} exact path='/meetups/edit/:id' component={EditMeetup} />}
        <PrivateRoute authed={true} exact path='/meetups/:id' component={MeetupDetails} />
      </Switch>
    )
  }
}

export default Routes
