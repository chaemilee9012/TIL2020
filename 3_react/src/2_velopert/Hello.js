import React from 'react';


// function Hello(props) {
//   console.log(props);
//   return <div style={{
//     color: props.color,
//   }}>안녕하세요? {props.name}</div>;
// }

// 비구조할당(구조 분해)
function Hello({ color, name}) {
  return <div style={{
    color, // color: "red"
  }}>안녕하세요? {name}</div>;
}

// props 전달받지 않았을 때 사용할 기본값 설정
Hello.defaultProps = {
  name: '이름없음',
};

export default Hello;