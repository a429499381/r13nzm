import { render } from 'react-dom'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Reducer from './Reducer'
import App from './containers/Hello/app'

const store = createStore(Reducer)

render (
  <Provider store = {store}><App /></Provider>,
  document.getElementById('root')
)