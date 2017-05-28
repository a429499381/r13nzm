import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as  userinfoActions from '../actions/userinfo'
import Home from '../components/Home'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>{this.props.children}
        <Home userinfo = {this.props.userinfo} />
      </div>
    )
  }

  componentDidMount() {

  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)

