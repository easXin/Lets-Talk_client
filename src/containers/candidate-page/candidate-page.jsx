import React,{Component} from 'react';
import {connect} from 'react-redux';
import { NavBar, InputItem, TextareaItem, Button, WingBlank, WhiteSpace } from 'antd-mobile';
import Avatar from '../../components/avatar-selector/avatar-selector';
import {syncUserInfo} from '../../redux/actions';

class Candidate extends Component{
  state={
    avatar:'',
    jobType:'',
    personalStatement:''
  }
  handleChange = (name, value) => {
    this.setState({[name]: value})
  }
  setAvatar=(avatar) =>{
    this.setState({avatar});
  }
  render(){
    return(
      <div>
        <NavBar> Candidate Info</NavBar>
        <WingBlank>
          <Avatar setAvatar={this.setAvatar}/>
          <InputItem placeholder="Recruitment Position"
                     onChange={val => this.handleChange('jobType', val)}/>
          <TextareaItem placeholder="Brief introduction" rows={3}
                        onChange={val => this.handleChange('personalStatement',val)}/>
        </WingBlank>
        <WhiteSpace/>
        <Button type="primary" onClick={() => this.props.syncUserInfo(this.state)}>Save</Button>
      </div>
    )
  }
}

export default connect(
    state =>({user:state.user}),
    {}
)(Candidate)
