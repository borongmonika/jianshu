import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import { actionCreators } from './store'
import { connect } from 'react-redux';

import {
  HomeWrapper,
  HomeRight,
  HomeLeft
} from './style'
class Home extends Component {
  
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img 
            className='banner-img' alt='展示图'
            src="//upload.jianshu.io/admin_banners/web_images/4650/d37ca7cda4434c04dbee1d718ca8293ad7372516.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
           />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData();
  }
}
const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  }
})
export default connect(null, mapDispatch)(Home);