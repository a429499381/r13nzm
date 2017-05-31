import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../actions/userinfo'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { initDone: false }
    }
    render() {
        return (
            <div>
                {
                    this.state.initDone
                    ? this.props.children
                    : <div>加载中...</div>
                }
            </div>
        )
    }

    componentDidMount() {
      let cityName = ''
      if (cityName == null) {
          cityName = "武汉"
      }

      this.props.userInfoActions.update({
        cityName: cityName,
      })

      this.setState({
        initDone: true
      })
    }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
      userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
