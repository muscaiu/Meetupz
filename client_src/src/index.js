import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import Meetups       from './components/Meetups'
import About         from './components/About'
import MeetupDetails from './components/MeetupDetails'
import AddMeetup     from './components/AddMeetup'
import EditMeetup    from './components/EditMeetup'
import Login         from './components/Login'

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route {...rest} render={props => (
      localStorage.getItem('access_token')
        ? (<Component {...props} />)
        : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
    )} />
  )
}

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Meetups} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute authed={false} exact path='/about' component={About} />
        <PrivateRoute authed={true} exact path='/meetups/add' component={AddMeetup} />
        <PrivateRoute authed={true} exact path='/meetups/edit/:id' component={EditMeetup} />}
        <PrivateRoute authed={true} exact path='/meetups/:id' component={MeetupDetails} />
      </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
