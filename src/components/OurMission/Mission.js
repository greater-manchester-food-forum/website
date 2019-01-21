import React, { Component } from 'react';

export default class Mission extends Component {
  state = {
    backgroundShown: false,
  };

  toggleBackground = shown => {
    this.setState({ backgroundShown: shown });
  };

  render() {
    const { backgroundShown } = this.state;
    const { title, image, desc } = this.props;
    return (
      <div
        className="border border-grey p-12 py-16 mission-container bg-center bg-no-repeat bg-cover"
        style={
          backgroundShown
            ? {
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
              }
            : {}
        }
        onMouseEnter={() => this.toggleBackground(true)}
        onMouseLeave={() => this.toggleBackground(false)}
      >
        <h2 className="text-3xl">{title}</h2>
        <p />
      </div>
    );
  }
}
