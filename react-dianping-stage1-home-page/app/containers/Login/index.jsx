import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import LoginComponent from '../../components/LoginComponent'

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      checking: true
    }
  }
  render() {
    return (
      <div>
        {
            this.state.checking
            ? <div>登陆中</div>
            : <LoginComponent loginHandle = {this.loginHandle.bind(this)}/>
        }
      </div>
    )
  }

  componentDidMount() {
    this.doCheck()
  }
  loginHandle(username) {
      const actions = this.props.userInfoActions
      let userinfo = this.props.userinfo
      userinfo.username = username
      actions.update(userinfo)

     const params = this.props.params
     const router = params.router
     if (router) {
          hashHistory.push('/User')
     }
  }
  doCheck() {
      const userinfo = this.props.userinfo
    if (userinfo.username) {
          this.goUserPage()
    } else {
      this.setState({
        checking: false
      })
    }

  }

  goUserPage() {
      hashHistory.push('/User')
  }

}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
  return {
      userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
