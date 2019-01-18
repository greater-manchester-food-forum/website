import React, { Component } from 'react';
import homeScreenImage from '../images/pasta.jpg';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-8 h-screen home-screen-image flex items-center">
          <div className=" container mx-auto text-white w-1/2 flex flex-col p-6 justify-center items-center">
            <h1 className="text-5xl font-bold tracking-tight leading-tight mb-3 text-center">
              Join the Conversation
            </h1>
            <p className="text-center hidden md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="btn btn-green mt-3" type="button">
              Find out more
            </button>
          </div>
          <div className="scroll-down" />
        </div>
        <div className="flex mt-12 w-full">
          <h2 className="mx-auto text-3xl">Our Mission</h2>
        </div>
      </React.Fragment>
    );
  }
}
