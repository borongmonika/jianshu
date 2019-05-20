import React, { Component } from 'react';
import GlobalStyle from './style.js';
import Iconfont from './statics/iconfont/iconfont.js'
import Header from './common/header/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle/>
        <Iconfont/>
        <BrowserRouter>
          <Header/>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail:id' exact component={Detail}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/write' exact component={Write}></Route>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
