import React, { Component, Fragment } from 'react';
import Header from './Header';
import plan from '../images/plan.jpg';
import ActionPlan from './ActionPlan';

export default class ActionPlans extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Fragment>
        <Header title="Action Plans" image={plan} />
        <div className="py-4">
          <div className="border border-grey">
            <ActionPlan />
            <ActionPlan />
            <ActionPlan />
            <ActionPlan />
          </div>
        </div>
      </Fragment>
    );
  }
}
