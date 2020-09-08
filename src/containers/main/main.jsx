import React, {Component} from 'react';
import {Switch, Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Recruiter from '../recruiter-page/recruiter-page';
import Candidate from '../candidate-page/candidate-page';
import {redirectUPage} from '../../utils/index';
import Cookies from 'js-cookie';
class Main extends Component {
  // initial render, constructor, componentWillMount, render, componentDidMount,componentWillUnmount
  componentDidMount() {
    const userid = Cookies.get('userid')
    const {user} = this.props
    if (userid && !user._id) {
 //
    }
  }
  // if backend cookie is not exist then push user to login page
  render() {
    // if the user already login, then backend should sent me cookie id
    const cookie = Cookies.get('userid');
    // if there is no cookie, then push user back to the login page
    if(!cookie) {
      return <Redirect to='/login'/>
    }
    // if user just log in, then backend should sent me a _id in the props
    const {user} = this.props;   //  res.cookie('userid',user._id,{maxAge:1000*60*7});
    const curPath = this.props.location.pathname;
    if(!user._id && curPath!=='/'){
      return <Redirect to='/login'/> // bug?
    }else{
      const path = redirectUPage(user.type, user.avatar)
      return <Redirect to={path}/>
      // const userType = this.props.user.type;
      // if(userType.toLowerCase() === 'candidate'){
      //   return <Redirect to='/candidate'/>
      // }else{
      //   return <Redirect to='/recruiter'/>
      // }
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
