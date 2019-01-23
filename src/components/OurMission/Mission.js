import React, { Component } from 'react';
import classNames from 'classnames';

export default class Mission extends Component {
  state = {
    backgroundShown: false,
  };

  componentWillMount() {
    if (window.innerWidth < 992) this.setState({ backgroundShown: true });
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  toggleBackground = shown => {
    if (window.innerWidth < 992) return;
    this.setState({ backgroundShown: shown });
  };

  updateDimensions = () => {
    const bgAlwaysShown = window.innerWidth < 992;
    this.setState({ backgroundShown: bgAlwaysShown });
  };

  render() {
    const { backgroundShown, windowWidth } = this.state;
    const { title, image, desc } = this.props;
    const bgPosition = backgroundShown ? 'center' : '-2000px';
    const textColour = backgroundShown ? 'text-white' : 'text-safe-green';
    return (
      <div
        className={`flex flex-col justify-between bg-white border border-grey px-4 py-8 md:px-12 md:py-16 mission-container bg-no-repeat bg-cover ${textColour}`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
          backgroundPosition: bgPosition,
        }}
        onMouseEnter={() => this.toggleBackground(true)}
        onMouseLeave={() => this.toggleBackground(false)}
      >
        <h2 className="text-2xl md:text-3xl">
          {title} {windowWidth}
        </h2>
        <div className="bg-safe-green-dark h-1 w-12 " />
        <p
          className={classNames({
            'text-white': backgroundShown,
            'text-grey-darkest': !backgroundShown,
          })}
        >
          {desc}
        </p>
      </div>
    );
  }
}
