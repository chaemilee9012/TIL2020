import React from 'react'; // 리액트 불러오기

// function Hello(props) { // 컴포넌트 이름은 대문자로 시작
//   console.log(props);
//   return <div style={{
//     color: props.color
//   }}>안녕 {props.name}</div>;
// }

// function Hello({color, name}) { // 비구조 할당, 구조 분해
//   return <div style={{
//     color
//   }}>안녕 {name}</div>;
// }

// Hello.defaultProps = {
//   name: '이름없음'
// };

function Hello({color, name, isSpecial}) { // 비구조 할당, 구조 분해
  return (
    <div style={{
      color
    }}>
      {/* {isSpecial ? <b> * </b> : null} */}
      {isSpecial && <b> * </b>}
      <b>{isSpecial? '스페셜': '노노'}</b>
      {null}
      {false}
      {undefined}
      {0} {/*0은 값 출력됨 */}
      안녕 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없음'
};

export default Hello; // Hello 라는 컴포넌트를 내보내겠다