/**
 * Created by xutao on 2017/5/21.
 */
import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>Home {this.props.ActionsUserinfo.text}</p>
        <Link to = '/list'>to list</Link>
      </div>

    )
  }
}