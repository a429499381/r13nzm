import React, { Component } from 'react'
import {
  Router,
  Route,
  IndexRoute
} from 'react-router'

import App from '../containers/Hello/app'
import Detail from '../containers/Hello/Detail'
import List from '../containers/Hello/List'
import Home from '../containers/Hello/Home'
import Recommend from '../containers/Hello/Recommend'

export default class RouteMap extends Component {
  render() {
    return (
      <Router history = {this.props.history} >
        <Route path = '/' component = {App}>
          <IndexRoute component = {Home}/>
          <Route path = 'list' component = {List}/>
          <Route path = 'detail/:id' component = {Detail}/>
          <Route path = 'Recommend' component = {Recommend}/>
        </Route>
      </Router>
    )
  }
}