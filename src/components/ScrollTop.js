import React, { Component } from 'react';

class ScrollTop extends Component {
  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0);
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

export default ScrollTop;
