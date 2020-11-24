import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){

  }

  render() {
    return (
      <h1>Hello</h1>
    );
  }
}

export default App;

const container = document.getElementById('app');

render(<App />, container);
