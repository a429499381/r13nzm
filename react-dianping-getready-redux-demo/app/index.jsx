import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

import './static/css/common.less'
import App from './containers/app'

const store = createStore(rootReducer)

render (
  <Provider store = {store}><App /></Provider>,
  document.getElementById('root')
)
