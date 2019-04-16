import React, { Component, Fragment } from 'react';
import GlobalStyle from './style.js';
import Iconfont from './statics/iconfont/iconfont.js'
import Header from './common/header/index'
class App extends Component {
  render() {
    return (
      <Fragment>
      <GlobalStyle/>
      <Iconfont/>
      <Header/>
      </Fragment>
    )
  }
}

export default App;
