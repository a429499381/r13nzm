import React from 'react'


class HomeHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div>
        <p>{this.props.userinfo.text}</p>
      </div>
    )
  }
}

export default HomeHeader