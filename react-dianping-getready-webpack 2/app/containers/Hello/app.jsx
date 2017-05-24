import React from 'react'
import {  connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as ActionChange from '../../action/index'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>{this.props.children}</div>
  )
  }

  componentDidMount() {
    this.props.ActionsC.changeText  }
}

function mapStateToprops(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ActionsC: bindActionCreators(ActionChange,dispatch)
  }
}


export default connect(
  mapStateToprops,
  mapDispatchToProps
)(App)
