import React, { Component } from 'react';
import { HomeWrapper, HomeRight, HomeLeft } from './style'
class Home extends Component {
    render() {
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt='展示图'
                    src="//upload.jianshu.io/admin_banners/web_images/4650/d37ca7cda4434c04dbee1d718ca8293ad7372516.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                </HomeLeft>
                <HomeRight>right</HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;