import React, { Component } from "react";
  
function getNum() {
  var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var arr = [];

  for (var i = 0; i < 4; i++) {
    var chosen = num.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    arr.push(chosen);
  }
  return arr;
}

class BaseBall2 extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: '10',
      value: '',
      answer: getNum(),
    }
    console.log(this.state.answer);
  }

  render() {
    return (
      <>
        <h2>야구게임</h2>
        <form
          action="/"
          onSubmit={function(e) {
            e.preventDefault();
          }.bind(this)}>
          <input
            type="text"
            maxLength="4"
            value={this.state.value}
            onChange={function(e) {
              var valueArr;
              this.setState({
                value: e.target.value
              });
              valueArr = this.state.value.split('').map((v) => parseInt(v));
              console.log(valueArr);
            }.bind(this)}
          ></input>
          <button type="submit">확인</button>
        </form>
        <div>남은 기회: {this.state.count}</div>
        <ul>
        </ul>
      </>
    );
  }
}

export default BaseBall2;