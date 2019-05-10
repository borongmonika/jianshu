import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {  LoginWrapper,
          LoginBox,
          Input,
          Button} from './style';
class Login extends Component {
  render() {
    const { loginState } = this.props;
    console.log(loginState)
    if(!loginState) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号:' ref={(input) => {this.account = input}}/>
            <Input placeholder='密码:' type='password' ref={(input) => {this.passwred = input}}/>
            <Button onClick={() => this.props.login(this.account, this.passwred)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      
    )
    }else {

      return <Redirect to='/' />
    }
 
  }
 
}
const mapState = (state) => ({
  loginState: state.getIn(['login', 'login'])
})
const mapDispatch = (dispatch) => ({
  login(accountElem, passwordElem){
    dispatch(actionCreators.login(accountElem.value, passwordElem.value))
  }
})
export default connect(mapState, mapDispatch)(Login);