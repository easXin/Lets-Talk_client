import React, {Component} from 'react';
import {Button} from 'antd-mobile';
import {connect} from 'react-redux';
class NotFound extends Component{
  render () {
    return(
        <div>
          <h2>Error 404 : Page Not Found</h2>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <Button type="primary" onClick={()=> this.props.history.replace("/")}>
            Go Back
          </Button>
        </div>
    )
  }
}

export default connect(
    state=>({}),
    {}
)(NotFound)
