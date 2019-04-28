import axios from 'axios';
import * as constants from './constants';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})
const addHomeList = (list) => ({
    type: constants.ADD_ARTICLE_LIST,
    // list: 
})
export const getHomeInfo = () => {
    return (dispatch) =>{
        axios.get('/api/home.json')
        .then((res)=>{
          const result = res.data.data;
          dispatch(changeHomeData(result));
        })
    }
}
export const getMoreList = () => {
    return (dispatch) => {
        axios.get('/api/homeList.json')
        .then((res)=>{
          const result = res.data.data;
          dispatch(addHomeList(result))
        })
    }
}