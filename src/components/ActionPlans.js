import React, { Component, Fragment } from 'react';
import Header from './Header';
import plan from '../images/plan.jpg';
import Tab from './Tab';

export default class ActionPlans extends Component {
  state = {
    actionPlans: [
      { id: 1, title: 'Collab One', active: true },
      { id: 2, title: 'Collab Two', active: false },
      { id: 3, title: 'Collab One', active: false },
    ],
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  tabClick = id => {
    let { actionPlans } = this.state;
    actionPlans = actionPlans.map(p => {
      if (p.id === id) p.active = true;
      else p.active = false;
      return p;
    });
    this.setState({ actionPlans });
  };

  render() {
    const { actionPlans } = this.state;
    return (
      <Fragment>
        <Header title="Action Plans" image={plan} />
        <div className="container mx-auto mt-12">
          <ul className="list-reset flex">
            {actionPlans.map(p => (
              <Tab
                id={p.id}
                title={p.title}
                active={p.active}
                onClick={this.tabClick}
              />
            ))}
          </ul>
          <div className="bg-white h-screen border" />
        </div>
      </Fragment>
    );
  }
}
