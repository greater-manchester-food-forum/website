import React, { Component, Fragment } from 'react';
import image from '../images/market.jpg';
import OurMission from './OurMission/OurMission';

export default class AboutUs extends Component {
  render() {
    return (
      <Fragment>
        <div
          className="h-64 flex items-center bg-center bg-cover"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
          }}
        >
          <div className="mx-auto">
            <h1
              className="text-white text-5xl font-bold tracking-tight leading-tight mb-3 text-center"
              style={{ marginTop: '89px' }}
            >
              About Us
            </h1>
          </div>
        </div>

        <div className="py-16 container mx-auto">
          <div className=" w-1/2">
            <h2 className="pb-4 text-safe-green font-bold tracking-tight leading-tight">
              Mission Statement
            </h2>
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
          </div>
        </div>
      </Fragment>
    );
  }
}
