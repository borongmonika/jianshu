import React, { } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators }  from './store';
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
const Header = (props) => {
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
            in={props.focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handelInputFocus}
              onBlur={props.handelInputBlur}
            >
            </NavSearch>
          </CSSTransition>
          <span className=
            {props.focused ? 'focused iconfont' : 'iconfont'}>&#xe637;
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


const mapStateToProps = (state) => {
  return {
    focused: state.header.get('focused')
  }
}
const mapDispathTpProps = (dispatch) => {
  return {
    handelInputFocus() {
      dispatch(actionCreators.searchFocus())
    },
    handelInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}
export default connect(mapStateToProps, mapDispathTpProps)(Header);