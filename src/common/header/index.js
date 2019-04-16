import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import {
  HeaderWrapapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      focused: false
    }
    this.handelInputFocus = this.handelInputFocus.bind(this)
    this.handelInputBlur = this.handelInputBlur.bind(this)
  }
  render() {
    return (
      <HeaderWrapapper>
        <Logo href='./' />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <span className='iconfont'>&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition 
              in={this.state.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={this.state.focused ? 'focused' : ''}
                onFocus={this.handelInputFocus}
                onBlur={this.handelInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <span className=
              {this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe637;
              </span>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <span className='iconfont'>&#xe616;</span>文章
                    </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapapper>
    )

  }
  handelInputFocus() {
    this.setState({
      focused: true
    })
  }
  handelInputBlur() {
    this.setState({
      focused: false
    })
  }
}

export default Header;