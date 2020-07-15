import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  }

  myRef = null; // ref 설정

  constructor(props) { // 초기 state 설정
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
  // props로 받아온 값을 state에 동기화시키는 용도
  // 컴포넌트가 마운트될 때와 업데이트될 때 호출
    console.log('getDerivedStateFromProps');
    if(nextProps.color !== prevState.color) { // 조건에 따라 특정 값 동기화
      return { color: nextProps.color };
    }
    return null; // state를 변경할 필요가 없다면 null 반환
  }

  componentDidMount() {
  // 컴포넌트 만들고 첫 렌더링까지 마친 후 실행
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
  // props 또는 state 변경했을 때 리렌더링 시작할 지 여부 지정
  // 반드시 true 또는 false 반환해야 함
  // false 반환할 경우 업데이트 과정 중지됨
    console.log('shouldComponentUpdate', nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    // 컴포넌트 DOM에서 제거할 때 실행
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // render에서 만들어진 결과물이 브라우저에 반영되기 직전에 호출됨
    // 이 메서드에서 반환하는 값은 componentDidUpdate에서 세 번째 파라미터인 snapshot 값으로 전달될 수 있음
    // 업데이트하기 직전 값 참고해야할 때
    console.log('getSnapshotBeforeUpdate');
    if(prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  // prevProps 또는 prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근
  // getSnapshotBeforeUpdate에서 반환하는 값이 있다면 여기서 snapshot 값으로 전달받음
    console.log('componentDidUpdate', prevProps, prevState);
    if(snapshot) {
      console.log('업데이트되기 직전 색상: ', snapshot);
    }
  }

  render() {
    console.log('render');
    const style = {
      color: this.props.color
    };

    return (
      <div>
        <h1
          style={style}
          ref={ref => this.myRef=ref}
        >{this.state.number}</h1>
        <p>color: {this.state.color}</p>
        <button
          onClick={this.handleClick}
        >더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;