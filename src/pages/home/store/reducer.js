// import * as constants from './constants';
import { fromJS } from 'immutable';


const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],

    // topicList: 
    // [{
    //     id:1,
    //     title:'社会热点',
    //     imgUrl:'//upload.jianshu.io/admin_banners/web_images/4650/d37ca7cda4434c04dbee1d718ca8293ad7372516.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    // },{ id:2,
    //     title:'手绘',
    //     imgUrl:'//upload-images.jianshu.io/upload_images/4127955-27a47f8e16c1bab9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    // }],
    // articleList:
    // [{
    //     id: 1,
    //     title: 'Leanote 蚂蚁笔记',
    //     desc: '蚂蚁笔记是一款非常非常非常好用的笔记软件，对程序员非常友好，每个功能点都很方便，采用golang & mongodb开发。核心功能除了笔记以外，也是个博客。他可以把指定笔记，1秒公开成博客，支持自定义主题样式，且自带评论。',
    //     imgUrl: '//upload-images.jianshu.io/upload_images/15934130-c3073695078d0fe5.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    // },{
    //     id: 2,
    //     title: 'Leanote 蚂蚁笔记2',
    //     desc: '蚂蚁笔记是一款非常非常非常好用的笔记软件，对程序员非常友好，每个功能点都很方便，采用golang & mongodb开发。核心功能除了笔记以外，也是个博客。他可以把指定笔记，1秒公开成博客，支持自定义主题样式，且自带评论。',
    //     imgUrl: '//upload-images.jianshu.io/upload_images/15934130-c3073695078d0fe5.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    // },{
    //     id: 3,
    //     title: 'Leanote 蚂蚁笔记3',
    //     desc: '蚂蚁笔记是一款非常非常非常好用的笔记软件，对程序员非常友好，每个功能点都很方便，采用golang & mongodb开发。核心功能除了笔记以外，也是个博客。他可以把指定笔记，1秒公开成博客，支持自定义主题样式，且自带评论。',
    //     imgUrl: '//upload-images.jianshu.io/upload_images/15934130-c3073695078d0fe5.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    // },],
    // recommendList:
    // [{
    //     id: 1,
    //     imgUrl:'//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    // },{
    //     id: 2,
    //     imgUrl:'//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    // },{
    //     id: 3,
    //     imgUrl:'//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    // },{
    //     id: 4,
    //     imgUrl:'//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    // },]
});

export default (state = defaultState, action) => {
    switch(action.type) {
        default: return state;
    }

}