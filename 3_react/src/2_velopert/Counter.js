import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { // state 초깃값 걸정
      number: 0,
      fixedNumber: 0,
    };
  }

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회해야 함
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => { // onClick 발생했을 때 호출할 함수 지정
            this.setState({ number: number + 1 }); // state에 새로운 값 할당
          }}
        >+1</button>
      </div>
    );
  }
}

export default Counter;