import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?" +
        "country=us&" +
        "apiKey=2ab10248d6ea4276b5ccd96cc3fa8f20"
    )
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          articles: myJson.articles
        });
      });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        Hello World!
        <br></br>
        {this.state.articles.map((item, index) => {
          return (
            <div key={index}>
              <h2>{item.title}</h2>
              <img src={item.urlToImage} alt="" style={{ width: "50vw" }} />
              <p>{item.description}</p>
              <p>
                <a href={item.url}>Read More</a>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
