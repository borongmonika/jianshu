import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import axios from 'axios';

import {
  HomeWrapper,
  HomeRight,
  HomeLeft
} from './style'
class Home extends Component {
  componentDidMount() {
    axios.get('/api/home.json').then((res)=>{
      console.log(res)
    })
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
      </HomeWrapper>
    )
  }
}

export default Home;