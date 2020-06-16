import React, { Component } from 'react';

class Contents extends Component {
  render() {
    return (
      <article>
        {/* <h2>HTML</h2>
        HTML is HyperText Markup Language. */}
        <h2>{this.props.title}</h2>
        {this.props.dscrt}
      </article>
    );
  }
}

export default Contents;