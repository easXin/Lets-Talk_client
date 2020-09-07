import React, {Component} from 'react';
import {
  NavBar, WingBlank, InputItem, WhiteSpace, Button
} from 'antd-mobile';
import Logo from '../../components/logo/Logo';
export default class Login extends Component{
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
    /* Interact with backend*/
    console.log(JSON.stringify(this.state))
  }
  render(){
    return(
        <div>
          <NavBar >lightTalk</NavBar>
          <Logo/>
          <WingBlank>
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
