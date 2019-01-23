import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Collaborators from './Collaborators';
import tomSmall from '../images/tom-small.jpg';
import tom from '../images/tom.jpg';
import feedingGM from '../images/feeding-gm.png';
import goodGM from '../images/good-food-for-gm.png';
import GMCA from '../images/gcma.png';
import realFoodGuide from '../images/real-food-guide.png';
import openKitch from '../images/open-kitch.png';
import kindTrust from '../images/kind-trust.png';
import emerge from '../images/emerge-logo.png';

class Home extends Component {
  state = {
    collaborators: [
      { name: 'Feeding GM', logo: feedingGM },
      { name: 'Good Food For GM', logo: goodGM },
      // { name: 'GMCA’s Health Hub', logo: GMCA },
      // { name: 'Friends of the Earth', logo: realFoodGuide },
      // { name: 'Real Junk Food Mcr', logo: openKitch },
      { name: 'Kindling Trust', logo: kindTrust },
      // { name: 'FareShare GM', logo: emerge },
    ],
  };

  scrollToCollaborators = () => {
    const element = document.querySelector('#collaborators');
    const navBarHeight = document.querySelector('#nav').clientHeight;
    window.scrollTo(
      0,
      window.pageYOffset + element.getBoundingClientRect().top - navBarHeight
    );
  };

  render() {
    const { collaborators } = this.state;
    return (
      <React.Fragment>
        <div
          className="py-8 h-screen home-screen-image flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.45)), url(${tom})`,
          }}
        >
          <div className=" container mx-auto text-white w-full md:w-1/2 flex flex-col p-4 md:p-0 justify-center items-center">
            <h1 className="text-6xl font-bold tracking-tight leading-tight mb-3 text-center">
              Our Mission
            </h1>
            <p className="text-center hidden md:block text-lg">
              To provide a place to learn, share and collaborate and make
              Greater Manchester’s food system better.
            </p>
            <div className="md:flex">
              <Link
                to="/about-us"
                className="btn btn-white mt-5 no-underline block mb-6 md:mb-0"
              >
                Mission Statement
              </Link>
              <a
                href="https://foodhubgm.trydiscourse.com/"
                className="btn btn-green mt-5 no-underline ml-4"
              >
                Visit the Forum
              </a>
            </div>
          </div>
          <button
            className="scroll-down outline-none focus:outline-none active:outline-none"
            onClick={this.scrollToCollaborators}
            type="button"
          />
        </div>
        <div className="container mx-auto my-16 md:w-2/3" id="collaborators">
          <h1 className=" mb-4 text-5xl font-bold tracking-tight leading-tight text-safe-green-darker text-center">
            Collaborators
          </h1>
          <p className="text-center mb-8 italic text-grey-darkest">
            The main organisations involved in this process.
          </p>
          <div className="collaborators-grid mt-4">
            {collaborators.map((c, i) => (
              <Collaborators key={i} name={c.name} logo={c.logo} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
