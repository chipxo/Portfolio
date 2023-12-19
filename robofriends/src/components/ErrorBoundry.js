import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    let { hasError } = this.state;
    let { children } = this.props;

    return hasError ? <h1>Ooops. That's bad</h1> : children;
  }
}

export default ErrorBoundry;
