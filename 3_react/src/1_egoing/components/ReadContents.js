import React, { Component } from 'react';

class ReadContents extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.dscrt}
      </article>
    );
  }
}

export default ReadContents;