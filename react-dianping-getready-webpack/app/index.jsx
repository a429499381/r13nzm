import React, { Component } from 'react'
import { render } from  'react-dom'
import { hashHistroy } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReduecr from './Reducer/index'
import RouteMap from './router/RouteMap'

const store = createStore(rootReducer)

render(
  <Provider store = {store}>
    <RouteMap histroy  = {hashHistroy}/>
  </Provider>,
  document.getElementById('root')
)