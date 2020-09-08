import React, {Component} from 'react'
import {List, Grid} from 'antd-mobile'
import PropTypes from 'prop-types'

export default class Avatar extends Component {
  static propTypes = {
    setAvatar: PropTypes.func.isRequired
  }
  state = {
    icon: null
  }
  // state
  constructor(props) {
    super(props)
    this.headerList = []
    for (let i = 0; i < 20; i++) {
      const text = `img${i+1}`
      this.headerList.push({text, icon: require(`../../assets/imgs/${text}.jpg`)})
    }
  }
  selectAvatar= ({icon, text}) => {
    this.setState({icon})
    this.props.setAvatar(text)
  }
  render () {
    const {icon} = this.state
    const renderHeader = icon ? <p>Avatar: <img src={icon} alt="header"/></p> : 'Please select an avatar'
    return (
        // https://mobile.ant.design/components/grid
        <List renderHeader={() => renderHeader}>
          <Grid data={this.headerList} columnNum={5} onClick={this.selectAvatar}/>
        </List>
    )
  }
}
