import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as  userinfoActions from '../../action/index'

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
    this.props.ActionsUserinfo.changeText()
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  ActionsUserinfo: bindActionCreators(userinfoActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)

