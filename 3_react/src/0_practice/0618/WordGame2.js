import React, { Component } from "react";

class WordGame2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: '장유수',
      value: '',
      result: '끝말잇기 시작',
      list: [],
    }
  }

  render() {
    return (
      <>
        <span>{this.state.start}</span>
        <form
          action="/"
          onSubmit={function(e) {
            e.preventDefault();
            if(this.state.start.charAt(this.state.start.length - 1, 1) === this.state.value.charAt(0, 1)) {
              var newArray;
              newArray = Array.from(this.state.list);
              newArray.push(this.state.value);
              this.setState({
                result: '정답',
                start: this.state.value,
                list: newArray,
              });
            } else {
              this.setState({
                result: '땡'
              });
            }
          }.bind(this)}
        >
          <input
            type="text"
            value={this.state.value}
            onChange={function(e) {
              this.setState({
                value: e.target.value,
              })
            }.bind(this)}
          ></input>
          <button
            type="submit"
          >입력</button>
        </form>
        <p>{this.state.result}</p>
        <p>{this.state.list}</p>
      </>
    );
  }
}

export default WordGame2;
