import React, { Component } from 'react';
import classNames from 'classnames';

export default class Mission extends Component {
  state = {
    backgroundShown: false,
  };

  toggleBackground = shown => {
    console.log(`background show = ${shown}`);
    this.setState({ backgroundShown: shown });
  };

  render() {
    const { backgroundShown } = this.state;
    const { title, image, desc } = this.props;
    const bgPosition = backgroundShown ? 'center' : '-700px';
    const textColour = backgroundShown ? 'text-white' : 'text-safe-green';
    return (
      <div
        className={`flex flex-col justify-between border border-grey p-12 py-16 mission-container bg-no-repeat bg-cover ${textColour}`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
          backgroundPosition: bgPosition,
        }}
        onMouseEnter={() => this.toggleBackground(true)}
        onMouseLeave={() => this.toggleBackground(false)}
      >
        <h2 className="text-3xl">{title}</h2>
        <div className="bg-safe-green-dark h-1 w-12 " />
        <p
          className={classNames({
            'text-white': backgroundShown,
            'text-black': !backgroundShown,
          })}
        >
          {desc}
        </p>
      </div>
    );
  }
}
