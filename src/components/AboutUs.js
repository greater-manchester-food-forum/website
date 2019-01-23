import React, { Component, Fragment } from 'react';
import image from '../images/market.jpg';
import Header from './Header';
import MissionSummary from './OurMission/MissionSummary';
import quote from '../images/quote.png';
import feedingGM from '../images/feeding-gm.png';
import goodGM from '../images/good-food-for-gm.png';
import GMCA from '../images/gcma.png';
import realFoodGuide from '../images/real-food-guide.png';
import openKitch from '../images/open-kitch.png';
import kindTrust from '../images/kind-trust.png';
import emerge from '../images/emerge-logo.png';
import Collaborators from './Collaborators';

export default class AboutUs extends Component {
  state = {
    collaborators: [
      {
        name: 'Feeding GM',
        logo: feedingGM,
        url: 'https://feedinggtrmcr.org.uk/',
      },
      {
        name: 'Good Food For GM',
        logo: goodGM,
        url: 'https://goodfoodgreaterman.wixsite.com/home',
      },
      { name: 'GMCA’s Health Hub', logo: GMCA },
      { name: 'Friends of the Earth', logo: realFoodGuide },
      { name: 'Real Junk Food Mcr', logo: openKitch },
      {
        name: 'Kindling Trust',
        logo: kindTrust,
        url: 'https://kindling.org.uk/',
      },
      { name: 'FareShare GM', logo: emerge },
    ],
  };

  render() {
    const { collaborators } = this.state;
    return (
      <Fragment>
        <Header image={image} title="About Us" />
        <div className="py-4 container mx-auto">
          <div className="text-center">
            <img
              src={quote}
              alt="quotation-marks"
              className="h-16 text-center mb-4 mt-8"
            />
            <p className="md:w-3/4 mx-auto">
              As growing numbers of us are realising, food is vital in so many
              ways: not just in nourishing our bodies and communities, but as a
              means to vastly improve our collective environmental impact. It is
              also a key issue in achieving social justice through ensuring
              everyone can afford and access good-quality, healthy, desirable
              food.
              <br />
              <br />
              Cities are increasingly seen as a place where food systems can be
              changed, and Greater Manchester is no exception. The city has a
              wealth of organisations working on local food growing, food waste
              prevention, food access for those on low incomes, cooking and much
              more.
              <br />
              <br />
              The aim of this site, developed collaboratively by some of those
              organisations, is to bring many more people into a big
              conversation around food. It will be a hub to find out what is
              happening in the city, to link organisations who can share
              knowledge and resources, and to build a coalition of citizens
              demanding a better food future. We hope that the conversations
              happening here will shape what this online hub can do in future.
              <br />
              <br />
              Join the conversation and share your ideas!
            </p>

            <h2 className="pb-4 text-xl pt-4 text-safe-green font-bold tracking-tight leading-tight mb-5">
              Greater Manchester Food Hub - 2019 Mission Statement
            </h2>
            <a
              href="https://foodhubgm.trydiscourse.com/"
              className="btn btn-green no-underline"
            >
              Visit the Forum
            </a>
          </div>
          <h1 className="my-8 text-safe-green">Our Mission</h1>
          <MissionSummary />
          <h1 className="my-8 text-safe-green mt-12">All Collaborators</h1>
          <div className="collaborators-grid mt-4">
            {collaborators.map((c, i) => (
              <Collaborators key={i} name={c.name} logo={c.logo} url={c.url} />
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}
