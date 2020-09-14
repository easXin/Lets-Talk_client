import React from 'react'
import {Result, List, WhiteSpace, Button, Modal} from 'antd-mobile'
import {connect} from 'react-redux'
import Cookies from 'js-cookie';
import {resetUser} from '../../redux/actions'

const Item = List.Item
const Brief = Item.Brief

class Personal extends React.Component {
    logOut = () =>{
      Modal.alert('Quit','Are you sure???',[
        {
          text: 'Yes',
          onPress:()=>{
            Cookies.remove('userid');
            this.props.resetUser();
          }
        },
        {
          text: 'No'
        }
      ])
}

    render() {
      const {username,avatar,jobType,incName,personalStatement,avgSalary,info} = this.props.user;

      return (
          <div>
            <Result
                img={<img src={require(`../../assets/imgs/${avatar}.jpg`)} style={{width: 50}}
                          alt="header"/>}
                title={username}
                message={incName}
            />
            <List renderHeader={() => 'Personal Info'}>
              <Item multipleLine>
                <Brief>Job: {jobType}</Brief>
                <Brief>Intro: {personalStatement}</Brief>
                { avgSalary ? <Brief>Salary: {avgSalary}</Brief>:null}
              </Item>
            </List>
            <WhiteSpace/>
            <List>
              <Button type='warning' onClick={this.logOut}>Log Out</Button>
            </List>
          </div>
      )
    }

}
// container explore
export default connect(
    state => ({user:state.user}), // needs user in above line
    {resetUser}
)(Personal)
