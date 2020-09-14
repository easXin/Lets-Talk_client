import React from 'react';
import PropTypes from 'prop-types';
import {TabBar} from 'antd-mobile';
import {withRouter} from 'react-router-dom';
class NavFooter extends React.Component {
  static propTypes = {
    navList: PropTypes.array.isRequired,
  }
  render() {
// nav.hide = true/false hide 代表当前项应该被隐藏
    const navList = this.props.navList.filter(nav => !nav.hide);
// 当前请求的路径
    const {pathname} = this.props.location;
    return (
        <TabBar>
          {
            navList.map((nav,index)=>
              <TabBar.Item
                  key={nav.path}
                  title={nav.text}
                  icon={{uri: require(`./images/${nav.icon}.png`)}}
                  selectedIcon={{uri: require(`./images/${nav.icon}-selected.png`)}}
                  selected={pathname===nav.path}
                  onPress={() => {
                    this.props.history.replace(nav.path)
                  }}
              />
            )
          }
        </TabBar>
    )
  }
}
  export default withRouter(NavFooter);
