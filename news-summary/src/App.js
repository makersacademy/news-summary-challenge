import React, { Component } from 'react';
import NewsArticleList from './components/NewsArticleList'
import NewsArticle from './components/NewsArticle'
import Header from './components/Header'
import {BrowserRouter as Router, NavLink, IndexRoute, hashHistory} from "react-router-dom";
import Route from 'react-router-dom/Route'
import './App.css';

class App extends Component {
  state = {
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <NavLink to="/home" exact activeStyle={{color: 'green'}}>Home</NavLink>
          <Route path="/home" exact strict component={NewsArticleList} />
          <Route path="/article" exact strict component={NewsArticle} />
        </div>
      </Router>
    )
  }
}

export default App;
