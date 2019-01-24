import React, { Component, Fragment } from 'react';
import image from '../images/market.jpg';
import Header from './Header';
import MissionSummary from './OurMission/MissionSummary';
import quote from '../images/quote.png';
import collaborators from '../collaborators';
import Collaborator from './Collaborator';

export default class AboutUs extends Component {
  state = {};

  render() {
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
          <div className="px-4 px-0">
            <h1 className="my-8 text-safe-green">Our Mission</h1>
            <MissionSummary />
          </div>

          <div className="collaborators-grid mt-4 px-4 md:px-0">
            <h1 className="my-8 text-safe-green mt-12">All Collaborators</h1>
            {collaborators.map((c, i) => (
              <Collaborator key={i} name={c.name} logo={c.logo} url={c.url} />
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}
