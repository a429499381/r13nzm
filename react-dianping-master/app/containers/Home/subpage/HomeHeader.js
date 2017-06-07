/**
 * Created by xutao on 2017/6/7.
 */
import React from 'react'
import { Link, hashHistory } from 'react-router'

class HomeHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Link to = '/city'>
          <span>{this.props.cityName}</span>
        </Link>
        <input type="text"/>
        <span>用户中心</span>
      </div>
    )
  }

}

export default HomeHeader