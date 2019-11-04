import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import Route from 'react-router-dom/Route'

class NewsArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: []
    }
  }

  componentDidMount() {
    fetch("https://content.guardianapis.com/search?q=football&show-elements=image&show-fields=thumbnail&api-key=d2c01113-d134-4849-9000-d3d8322a4a42")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            articles: result.response.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, articles } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
      return <div>Loading...</div>;
      } else {
      return (
        <Router>
          <ul className={"list-group list-group-flush text-center"}>
            {articles.map(article => (
              <li key={article.id} className={"list-group-item font-weight-bold"}>
                <a href={article.webUrl} className={"list-group-item-action"}>{article.webTitle}</a><br/>
                <NavLink to="/article" exact strict activeStyle={{color: "green"}}> Read Summary</NavLink><br/><br/>
                <img src={article.fields.thumbnail} className="rounded-lg mx-auto d-block"/>
              </li>
            ))}
          </ul>
        </Router>
      );
      }
  }
}

export default NewsArticleList;
