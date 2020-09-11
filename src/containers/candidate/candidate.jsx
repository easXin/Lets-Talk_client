import React, {Component} from 'react';
import {connect} from 'react-redux';

class CandidateM extends Component{
  render () {
    return(
        <div>Candidate</div>
    )
  }
}
export default connect(
    state =>({}),
    {}
)(CandidateM)
