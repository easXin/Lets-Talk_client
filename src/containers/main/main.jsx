import React, {Component} from 'react';
import {Switch, Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Recruiter from '../recruiter-page/recruiter-page';
import Candidate from '../candidate-page/candidate-page';

import Cookies from 'js-cookie';
class Main extends Component {
 //  componentDidMount() {
 //    const userid = Cookies.get('userid')
 //    const {user} = this.props
 //    if (userid && !user._id) {
 // //
 //    }
 //  }
  // if backend cookie is not exist then push user to login page
  render() {
    const cookies = Cookies.get('userid')
    const {user} = this.props
    if (!cookies||!user._id) { // 如果没值, 自动跳转到登陆界面
      return <Redirect to='/login'/>
    }

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
export default connect(
  state => ({user:state.user})
)(Main)
