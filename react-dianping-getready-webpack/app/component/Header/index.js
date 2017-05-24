/**
 * Created by xutao on 2017/5/21.
 */
import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <h1>{this.props.title}</h1>
    )
  }
}