import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
  HeaderWrapapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
  SearchWrapper
} from './style';

class Header extends Component {
  
  getListArea() {
    if (this.props.focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
          <SearchInfoSwitch>
              换一批
          </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              this.props.list.map((item)=>{
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
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
              in={this.props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handelInputFocus}
                onBlur={this.props.handelInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <i className=
              {this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe637;
          </i>
            {this.getListArea()}
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
}



const mapStateToProps = (state) => {
  return {
    // focused: state.getIn(['header', 'focused']) === focused: state.get('header').get('focused')
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
  }
}
const mapDispathTpProps = (dispatch) => {
  return {
    handelInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());  
    },
    handelInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}
export default connect(mapStateToProps, mapDispathTpProps)(Header);