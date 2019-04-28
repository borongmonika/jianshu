import React, { Component } from 'react';
import { RecommendItem, RecommendWrapper } from '../style';
import { connect } from 'react-redux';

class Recommend extends Component {
  render() {
    const { list } = this.props;
    return (
      <RecommendWrapper>
        {list.map((item) => {
          return (
            <RecommendItem 
              alt=''
              key={item.get('id')}
              imgUrl={item.get('imgUrl')}>
            </RecommendItem>
          )
        })
        }
      </RecommendWrapper>
    )
  }
}
const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList'])

})
export default connect(mapState, null)(Recommend);