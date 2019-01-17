import React, { Component } from 'react';
import homeScreenImage from '../images/pasta.jpg';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="mt-16 py-8 h-halfscreen home-screen-image flex items-center">
          <div className="bg-grey opacity-25 rounded transparent w-1/3 ml-24 h-24 flex items-center">
            <p className="text-3xl tracking-tight leading-tight mx-auto opacity-100">
              Join the food journey in your city
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
