import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import  { Link, hashHistory } from 'react-router'
import './style.less'

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
          phone: ''
        }
    }
    render() {
        return (
           <div>
             <input type="text"
                  placeholder = '请输入手机号码'
                  onChange = {this.changeHandle.bind(this)}
                  value = {this.state.phone}
             />
             <button onClick = {this.clickHandle.bind(this)}>登陆</button>
           </div>
        )
    }

    changeHandle(e) {
      this.setState({
        phone: e.target.value
      })
    }
  clickHandle() {
      const username = this.state.phone
      const loginHandle = this.props.loginHandle
      loginHandle(username)
    }

}

export default HomeHeader