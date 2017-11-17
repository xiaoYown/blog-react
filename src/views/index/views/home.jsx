import React, { Component } from 'react';

class home extends React.Component {
  render () {
    return (
      <div className="home__wrap">
        <h1 className="home__wrap-title">
          xiaoYown
          <p className="home__wrap-title_tip">
            简介 :
            <br/>
            默默无闻前端小码农
          </p>
        </h1>
        <div id="spread-box" className="home__wrap-spread">
          <div id="spread-btn" className="home__wrap-spread_btn">
            <span className="iconfont icon-arrow-double-r"></span>
            <span className="iconfont icon-arrow-double-l"></span>
            <span className="iconfont icon-options"></span>
          </div>
          <ul className="home__wrap-spread_list">
            <a href="/home">
              <li className="home__wrap-spread_item">首页</li>
            </a>
            <a href="/journal">
              <li className="home__wrap-spread_item">琐事</li>
            </a>
          </ul>
        </div>
        <ul className="home__wrap-list">
        </ul>
      </div>
    );
  }
};

export default home;
