import React from 'react';
import { Link } from 'react-router-dom';
import Collaborator from './Collaborator';
import homeScreenImage from '../images/tom.jpg';
import collaborators from '../collaborators';

function Home() {
  const scrollToCollaborators = () => {
    const element = document.querySelector('#collaborators');
    const navBarHeight = document.querySelector('#nav').clientHeight;
    window.scrollTo(
      0,
      window.pageYOffset + element.getBoundingClientRect().top - navBarHeight
    );
  };
  return (
    <React.Fragment>
      <div
        className="py-8 h-screen home-screen-image flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.45)), url(${homeScreenImage})`,
        }}
      >
        <div className=" container mx-auto text-white w-full md:w-1/2 flex flex-col p-4 md:p-0 justify-center items-center">
          <h1 className="text-6xl font-bold tracking-tight leading-tight mb-3 text-center">
            Our Mission
          </h1>
          <p className="text-center hidden md:block text-lg">
            To provide a place to learn, share and collaborate and make Greater
            Manchester’s food system better.
          </p>
          <div className="text-center md:flex">
            <Link
              to="/about-us"
              className="btn btn-white mt-5 no-underline block mb-6 md:mb-0 block"
            >
              Mission Statement
            </Link>
            <a
              href="https://foodhubgm.trydiscourse.com/"
              className="btn btn-green mt-5 no-underline md:ml-4 block"
            >
              Visit the Forum
            </a>
          </div>
        </div>
        <button
          className="scroll-down outline-none focus:outline-none active:outline-none"
          onClick={scrollToCollaborators}
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
        <div className="collaborators-grid mt-4 px-4 md:px-0">
          {collaborators
            .filter(c => c.mainCollaborator === true)
            .map((c, i) => (
              <Collaborator key={i} item={c} />
            ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
