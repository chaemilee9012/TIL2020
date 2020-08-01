import React, { Component } from 'react';

class HistorySample extends Component {
  handleGoBack = () => { // 뒤로가기
    this.props.histroy.goBack();
  };

  handleGoHome = () => { // 홈으로 가기
    this.props.history.push('/');
  };

  componentDidMount() { // 페이지 변하기 직전에 정말 나가는 것인지 확인
    this.unblock = this.props.history.block('확실?')
  }

  componentWillUmount() { // 컴포넌트 언마운트되면 확인 정지
    if(this.unblock) {
      this.unblock();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
    );
  }
}

export default HistorySample;