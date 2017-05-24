/**
 * Created by xutao on 2017/5/21.
 */
import React from 'react'

export default class Detail extends React.Component {
  render() {
    return (
      <p>详情页 url: {this.props.params.id}</p>
    )
  }
}