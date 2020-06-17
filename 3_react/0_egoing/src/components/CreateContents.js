import React, { Component } from "react";

class CreateContents extends Component {
  render() {
    return (
      <article>
        <h2>Create</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={function(e) {
            e.preventDefault();
            this.props.onSubmit(
              e.target.title.value,
              e.target.dscrt.value
            );
          }.bind(this)}
        >
          <p><input type="text" name="title" placeholder="title"></input></p>
          <p>
            <textarea name="dscrt" placeholder="description"></textarea>
          </p>
          <p><input type="submit"></input></p>
        </form>
      </article>
    );
  }
}

export default CreateContents;