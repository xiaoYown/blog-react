import React, { Component } from 'react';
import axios from 'axios';
import config from 'config/config';

class HomeList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      articals: []
    };
  }
  componentWillMount () {
    this.loadArticals();
    return {};
  }
  loadArticals () {
    axios.get(config.apiUrl + `/artical/list_blog`)
      .then(res => {
        const articals = res.data.data.articals;
        this.setState({ articals });
      });
  }
  render () {
    const list = this.state.articals.map((item, index) =>
      <li key={ index }>
        <h3 className="home__wrap-list_title">
          <a href={'/artical/' + item.id}>
            {item.title}
          </a>
        </h3>
        <div className="home__wrap-list_time">
          <span>创建 : {item.create_time}</span>
          <span>更新 : {item.update_time}</span>
        </div>
        <p className="home__wrap-list_desc">{item.description}</p>
      </li>
    );
    return (
      <div className="aside-wrap">
        <ul className="aside-container">
          { list }
        </ul>
      </div>
    );
  }
};

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
          <HomeList />
        </ul>
      </div>
    );
  }
};

export default home;
