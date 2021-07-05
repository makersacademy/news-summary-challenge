import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArticleList from "./components/ArticleList";
// import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <h1
                className="mt-5 text-center"
                style={{
                  fontSize: "64px",
                  fontFamily: "Titillium Web, sans-serif",
                  fontWeight: "700"
                }}
              >
                <span role="img" aria-label="robot">
                  🤖
                </span>{" "}
                Robot News
              </h1>

              <br></br>
              <ArticleList />
            </Col>
            <Col sm={2}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
