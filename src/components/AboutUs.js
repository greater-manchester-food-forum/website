import React, { Component, Fragment } from 'react';
import image from '../images/market.jpg';
import Header from './Header';
import quote from '../images/quote.png';
import logo from '../images/logo.png';
import Collaborators from './Collaborators';

export default class AboutUs extends Component {
  render() {
    return (
      <Fragment>
        <Header image={image} title="About Us" />
        <div className="py-12 container mx-auto">
          <div className="text-center">
            <img src={quote} className="h-16 text-center mb-4" />
            <p>
              As growing numbers of us are realising, food is vital in so many
              ways: not just in nourishing our bodies and communities, but as a
              means to vastly improve our collective environmental impact. It is
              also a key issue in achieving social justice through ensuring
              everyone can afford and access good-quality, healthy, desirable
              food. Cities are increasingly seen as a place where food systems
              can be changed, and Greater Manchester is no exception. The city
              has a wealth of organisations working on local food growing, food
              waste prevention, food access for those on low incomes, cooking
              and much more. The aim of this site, developed collaboratively by
              some of those organisations, is to bring many more people into a
              big conversation around food. It will be a hub to find out what is
              happening in the city, to link organisations who can share
              knowledge and resources, and to build a coalition of citizens
              demanding a better food future. We hope that the conversations
              happening here will shape what this online hub can do in future.
              Join the conversation and share your ideas!
            </p>
            <h2 className="pb-4 text-xl pt-4 text-safe-green font-bold tracking-tight leading-tight">
              Greater Manchester Food Hub - 2019 Mission Statement
            </h2>
          </div>
          {/* <div className="">Location: Manchester</div> */}
          <h1 className="mt-8 text-safe-green">
            Collaborators
            <div className="collaborators-grid mt-4">
              <Collaborators name="Collab 1" logo={logo} />
              <Collaborators name="Collab 2" logo={logo} />
              <Collaborators name="Collab 3" logo={logo} />
              <Collaborators name="Collab 4" logo={logo} />
              <Collaborators name="Collab 5" logo={logo} />
              <Collaborators name="Collab 6" logo={logo} />
            </div>
          </h1>
        </div>
      </Fragment>
    );
  }
}
