import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import  LocalStore from '../util/localStore'
import { bindActionsCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActonsxutao from '../actions/userinfo'

import { CITYNAME } from '../config/index'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
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
      let cityName = LocalStore.getItem(CITYNAME)
      if (cityName == null) {
          cityName = '北京'
      }

      this.props.userInfoActions.update({
        cityname: cityName,
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
      userInfoActions: bindActionsCreators(userInfoActonsxutao, dispatch)
  }
}

export default connect({
  mapStateToProps,
  mapDispatchToProps
})(App)
