import React, { Component } from 'react';
import MissionSummary from './OurMission/MissionSummary';

export default class Home extends Component {
  scrollToMission = () => {
    const element = document.querySelector('#mission-statement');
    const navBarHeight = document.querySelector('#nav').clientHeight;
    window.scrollTo(
      0,
      window.pageYOffset + element.getBoundingClientRect().top - navBarHeight
    );
  };

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
              nisi ut aliquip exe ea commodo consequat.
            </p>
            <a
              href="https://foodhubgm.trydiscourse.com/"
              className="btn btn-green mt-3 no-underline"
            >
              Visit the Forum
            </a>
          </div>
          <button
            className="scroll-down outline-none focus:outline-none active:outline-none"
            onClick={this.scrollToMission}
            type="button"
          />
        </div>
        <MissionSummary />
      </React.Fragment>
    );
  }
}
