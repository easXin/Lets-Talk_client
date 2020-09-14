import React, {Component} from 'react';
import {Switch, Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Recruiter from '../recruiter-page/recruiter-page';
import Candidate from '../candidate-page/candidate-page';
import RecruiterM from '../recruiter/recruiter';
import CandidateM from '../candidate/candidate';
import Personal from '../personal/personal';
import Message from '../message/message';
import Chat from '../chat/chat';
import NotFound from '../../components/not-found/not-found';
import NavFooter from '../../components/nav-footer/nav-footer';
import Cookies from 'js-cookie';
import { NavBar } from 'antd-mobile'
class Main extends Component {
  navList = [
    {
      path: '/recruiter',
      component: RecruiterM,
      title: 'Recruiter List',
      icon: 're',
      text: 'Contacts',
      hide:false
    },
    {
      path: '/candidate',
      component: CandidateM,
      title: 'Candidate List',
      icon: 'ca',
      text: 'Contacts',
      hide:false
    },
    {
      path: '/message',
      component: Message,
      title: 'Message',
      icon: 'message',
      text: 'Chats',
    },
    {
      path: '/personal',
      component: Personal,
      title: 'Personal Info',
      icon: 'personal',
      text: 'Me',
    }
  ]
  // if backend cookie is not exist then push user to login page
  render() {
    const cookies = Cookies.get('userid')
    const {user} = this.props
    if (!cookies||!user._id) {
      return <Redirect to='/login'/>
    }
    const {navList} = this;
    // compare with every path element in navList
    const path = this.props.location.pathname
    const currentNav = navList.find(nav=>nav.path===path)

    user.type === 'recruiter'? navList[0].hide=true :navList[1].hide=true;
    return (
        <div>
          {currentNav ? <NavBar>{currentNav.title}</NavBar>:null}
          <Switch>
            {
              navList.map(nav=> <Route key={nav.path} path={nav.path} component={nav.component}/>)
            }
            <Route path='/recruiter-page' component={Recruiter}/>
            <Route path='/candidate-page' component={Candidate}/>
            <Route path='/chat' component={Chat}/>
            <Route component={NotFound}/>
          </Switch>
          {currentNav ? <NavFooter navList={navList} />:null}
        </div>
    )
  }
}
export default connect(
  state => ({user:state.user})
)(Main)
