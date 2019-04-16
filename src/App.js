import React, { Component } from 'react';
import GlobalStyle from './style.js';
import Iconfont from './statics/iconfont/iconfont.js'
import Header from './common/header/index';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle/>
        <Iconfont/>
        <Header/>
      </Provider>
    )
  }
}

export default App;
