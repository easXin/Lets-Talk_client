import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Recruiter from '../recruiter-page/recruiter-page';
import Candidate from '../candidate-page/candidate-page';
export default class Main extends Component {
  render() {
    return (
        <div>
          <Switch>
            <Route path='/recruiter-page' component={Recruiter}/>
            <Route path='/candidate-page' component={Candidate}/>
          </Switch>
        </div>
    )
  }
}
