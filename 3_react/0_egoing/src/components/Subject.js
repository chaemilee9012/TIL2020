import React, { Component } from 'react';

class Subject extends Component {
  render() {
    return (
      <header>
        {/* <h1>WEB</h1>
        world wide web! */}
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;