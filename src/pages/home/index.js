import React, { PureComponent } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import { actionCreators } from './store'
import { connect } from 'react-redux';
import { BackTop } from './style';

import {
  HomeWrapper,
  HomeRight,
  HomeLeft
} from './style'
class Home extends PureComponent {
  handleScroTop() {
    window.scrollTo(0, 0);
  }
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
        { this.props.showScroll ?  <BackTop onClick={this.handleScroTop}>回到顶部</BackTop> : null }
       
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillMount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}
const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow() {
    if(document.documentElement.scrollTop > 100 ){
      dispatch(actionCreators.toggleTopShow(true))
    }else {
      dispatch(actionCreators.toggleTopShow(false))
    }

  }
})
export default connect(mapState, mapDispatch)(Home);