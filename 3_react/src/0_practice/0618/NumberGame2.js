import React, { Component } from "react";

class NumberGame2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      result: '답을 입력해주세요.',
    }
  }

  render() {
    return(
      <>
        <span>
          {this.state.first} * {this.state.second} ?
        </span>
        <form
        action="/"
        onSubmit={function(e) {
          e.preventDefault();
          if(parseInt(this.state.value) === this.state.first * this.state.second) {
            this.setState({
              result: '정답',
              first: Math.ceil(Math.random() * 9),
              second: Math.ceil(Math.random() * 9),
              value: '',
            });
            this.input.focus();
          } else {
            this.setState({
              result: '땡',
            });
          }
        }.bind(this)}>
          <input
            type="number"
            value={this.state.value}
            onChange={function(e) {
              this.setState({value: e.target.value});
            }.bind(this)}
            ref={ref => {
              this.input = ref;
            }}
          ></input>
          <button type="submit">결과확인</button>
        </form>
        <p>{this.state.result}</p>
      </>
    );
  }
}

export default NumberGame2;