import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { withRouter } from 'react-router-dom';
import {
  DetailWrapper,
  Header,
  Content
} from './style';
class Detail extends Component {
  render() {
    return (
      <div>
        <DetailWrapper>
          <Header>{this.props.tatle}</Header>
          <Content 
            dangerouslySetInnerHTML={{__html: this.props.content}}/>
        </DetailWrapper>
      </div>
    )
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapState = (state) => ({
  tatle: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id))
  }
});

export default connect(mapState, mapDispatch)(withRouter(Detail));