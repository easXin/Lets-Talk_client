import React,{Component} from 'react';
import {connect} from 'react-redux';
import {NavBar,InputItem, TextareaItem, Button, WingBlank,WhiteSpace} from 'antd-mobile';
import {Redirect} from 'react-router-dom';
import {syncUserInfo} from '../../redux/actions';
import Avatar from '../../components/avatar-selector/avatar-selector';

class Recruiter extends Component{
  state = {
    avatar:'',
    jobType:'',
    incName:'',
    avgSalary:'',
    careerRequirement:''
  }

  handleChange = (name, value) => {
    this.setState({[name]: value})
  }
  setAvatar=(avatar) =>{
    this.setState({avatar});
  }
  // test=()=>{
  //   console.log(this.state);
  // }
  render(){
    //if user already has a profile img setup, that means he is not a new user anymore
    const {user} = this.props;
    if(user.avatar){
      return <Redirect to='/recruiter'/>
    }
    return(
        <div>
          <NavBar> Recruiter Info</NavBar>
          <WingBlank>
            <Avatar setAvatar={this.setAvatar}/>
            <InputItem placeholder="Recruitment Position"
                       onChange={val => this.handleChange('jobType', val)}/>
            <InputItem placeholder="Company Name"
                        onChange={val => this.handleChange('incName',val)}/>
            <InputItem placeholder="Avg Salary"
                        onChange={val => this.handleChange('avgSalary',val)}/>
            <TextareaItem placeholder="Minimum Requirement" rows={3}
                        onChange={val => this.handleChange('careerRequirement',val)}/>
          </WingBlank>
          <WhiteSpace/>
          <Button type="primary" onClick={() => this.props.syncUserInfo(this.state)}>Save</Button>
        </div>
    )
  }
}
// this.props.syncUserInfo
export default connect(
    state =>({user:state.user}),
    {syncUserInfo}
)(Recruiter)
