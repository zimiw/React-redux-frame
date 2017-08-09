import React, { Component } from 'react';

import './index.css';

class MyComponent extends Component {
  render() {
    return (
      <h1 className="demo">
        <span className="glyphicon glyphicon-th"></span>
        Hello world!
        <span className="glyphicon glyphicon-plane"></span>
      </h1>
    );
  }
}

export default MyComponent;
