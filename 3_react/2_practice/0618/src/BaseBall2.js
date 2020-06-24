import React, { Component } from "react";
import Try from "./Try";

  
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
      tries: [],
    };
    console.log(this.state.answer);
  }

  render() {
    return (
      <>
        <h2>야구게임</h2>
        <form
          action="/"
          onSubmit={function(e) {
            let ball = 0;
            let strike = 0;
            let newTries;
            e.preventDefault();
            this.setState({
              value: e.target._input.value
            });
            const valueArr = this.state.value.split('').map(v => parseInt(v));
            if(this.state.value === this.state.answer.join('')) {
              console.log('bingo'); // 4자리 다 맞았을 때
              this.setState({
                answer: getNum(),
                value: '',
              });
              e.target._input.focus();
            } else {
              this.setState({
                count: this.state.count - 1
              });
              if(this.state.count === 0) { // out
                this.setState({
                  answer: getNum(),
                  count: 10,
                });
                alert('out!!!');
              } else { // 0s0b 출력
                for(var i = 0; i < this.state.answer.length; i++) {
                  if(valueArr[i] === this.state.answer[i]) {
                    strike += 1;
                  } else if(this.state.answer.includes(valueArr[i])) {
                    ball += 1;
                  }
                }
                newTries = Array.from(this.state.tries);
                newTries.push({
                  value: this.state.value,
                  result: `${ball}B ${strike}S`
                });
                this.setState({
                  tries: newTries,
                });
              }
            }
          }.bind(this)}>
          <input
            type="text"
            maxLength="4"
            value={this.state.value}
            onChange={e => {
              this.setState({
                value: e.target.value,
              });
            }}
            name="_input"
          ></input>
          <button type="submit">확인</button>
        </form>
        <div>남은 기회: {this.state.count}</div>
        <ul>
          {this.state.tries.map((v, i) => {
            return <Try key={i} tryInfo={v} />;
          })}
        </ul>
      </>
    );
  }
}

export default BaseBall2;