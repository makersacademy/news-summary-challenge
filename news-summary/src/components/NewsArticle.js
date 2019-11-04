import React, { Component } from 'react'

class NewsArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: false,
      article: []
    }
  }

  render() {
    return(
      <h1>News Article</h1>
    )
  }

}

export default NewsArticle;
