import React from "react";

// function Hello(props) {
//   console.log(props);
//   return <div style={{
//     color: props.color,
//   }}>안녕하세요? {props.name}</div>;
// }

// 비구조할당(구조 분해)
function Hello({ color, name, isSpecial }) {
  return (
    <div
      style={{
        color, // color: "red"
      }}
    >
      {/* {isSpecial ? <b>*</b> : null} */}
      {/* 삼항연산자: 결과에 따라 내용 달라질 때 더 적합 */}
      {isSpecial && <b>*</b>}
      {/* &&: 결과가 false일 경우 출력되는 내용 X,
              true이면 오른쪽 내용 출력됨
          → 값 숨기고 보이는 것 조절할 때는 &&가 더 적합*/}
      안녕하세요? {name}
    </div>
  );
}

// props 전달받지 않았을 때 사용할 기본값 설정
Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
