import React, {Component} from 'react';
import {
  NavBar, WingBlank, List, InputItem, WhiteSpace, Radio, Button
} from 'antd-mobile';

import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { register } from '../../redux/actions'

import Logo from '../../components/logo/Logo';

class Register extends Component{
  state = {
    username: '',
    password: '',
    password2: '',
    type: 'Candidate'
  }
  handleChange = (name, value) => {
    this.setState({[name]: value})
  }
  toLogin = () => {
    this.props.history.replace('/login')
  }
  register = () => {
    this.props.register(this.state)
  }
  render(){
    const {type} = this.state
    const {redirectTo, msg} = this.props
    if (redirectTo) {
      return <Redirect to={redirectTo}/>
    }
    return(
        <div>
          <NavBar >lightTalk</NavBar>
          <Logo/>
          <WingBlank>
            {msg ? <p className='error-msg'>{msg}</p> : null}
            <InputItem placeholder="Username"
                       onChange={
                         val=>this.handleChange('username',val)
                       }/>
            <InputItem placeholder="Password"
                       onChange={
                         val=>this.handleChange('password',val)
                       }/>
            <InputItem placeholder="Confirm Password"
                       onChange={
                         val=>this.handleChange('password2',val)
                       }/>
            <WhiteSpace/>
            <List.Item>
              <span style={{marginRight: 30}}>User Type:</span>
              <Radio checked={this.state.type==='Candidate'}
                     onClick={() => {this.handleChange('type', 'Candidate')}}>Candidate</Radio>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={this.state.type==='Recruiter'}
                     onClick={() => {this.handleChange('type', 'Recruiter')}}>Recruiter</Radio>
            </List.Item>
            <WhiteSpace/>
            <Button type='primary' onClick={this.register}>Register
            </Button>
            <WhiteSpace/>
            <Button onClick={this.toLogin}>Already Have Account?</Button>

          </WingBlank>
        </div>


    )
  }
}
export default connect(
    state => state.user,
    {register}
)(Register)

