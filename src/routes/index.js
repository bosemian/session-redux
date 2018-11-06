import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../views/home/HomePage'
import UserDetail from '../views/users/UserDetail'

const Routing = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/users/:username" component={UserDetail} />
  </Switch>
)

export default Routing
