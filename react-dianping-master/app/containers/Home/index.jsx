import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import HomeHeader from './subpage/HomeHeader'
import Swiper from './subpage/Swiper'
import Ad from './subpage/Ad'
import List from './subpage/List'


class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <HomeHeader cityName = {this.props.userinfo.cityName}/>
                <Swiper/>
                <Ad/>
                <List/>
            </div>
        )
    }
}

function masS(state) {
  return {
      userinfo: state.userinfo
  }
}

function masD(dispatch) {

}

export default connect(
  masS,
  masD
)(Home)
