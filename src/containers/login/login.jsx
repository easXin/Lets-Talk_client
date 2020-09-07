import React, {Component} from 'react';
import {
  NavBar, WingBlank, InputItem, WhiteSpace, Button
} from 'antd-mobile';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login} from '../../redux/actions'

import Logo from '../../components/logo/Logo';
class Login extends Component{
  state = {
    username: '',
    password: ''
  }
  handleChange = (name, value) => {
    this.setState({[name]: value})
  }
  toRegister = () => {
    this.props.history.replace('/register')
  }
  login = () => {
    this.props.login(this.state)
  }
  render(){
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
            <WhiteSpace/>
            <Button type='primary' onClick={this.login}>Sign in
            </Button>
            <WhiteSpace/>
            <Button onClick={this.toRegister}>Create a New Account?</Button>

          </WingBlank>
        </div>


    )
  }
}
export default connect(
    state => state.user,
    {login}
)(Login)
