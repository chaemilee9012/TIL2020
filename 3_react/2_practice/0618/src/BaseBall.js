import React, { useState, useRef } from "react";
import Try from "./Try";

function getNum() {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const arr = [];

  for (var i = 0; i < 4; i++) {
    // 숫자 4개 뽑기(중복 제외)
    const chosen = num.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    arr.push(chosen);
  }
  return arr;
}

const BaseBall = () => {
  const _input = useRef(null);
  const [count, setCount] = useState(10);
  const [answer, setAnswer] = useState(getNum);
  console.log(answer);
  const [tries, setTries] = useState([]);
  const [_value, setValue] = useState("");

  const _onSubmit = (e) => {
    e.preventDefault();
    const valueArr = _value.split("").map((v) => parseInt(v));
    if(_value === answer.join('')) {
      console.log('정답');
      setAnswer(getNum);
      setValue('');
      _input.current.focus();
    } else {
      setCount(count - 1);
      let ball = 0;
      let strike = 0;
      if(count === 0) {
        setAnswer(getNum);
        setTries([]);
        setCount(10);
        alert('fail');
      } else {
        for(var i = 0; i < answer.length; i++) {
          if(valueArr[i] === answer[i]) {
            strike += 1;
          } else if(answer.includes(valueArr[i])) {
            ball += 1;
          }
        }
        setTries([
          ...tries,
          {
            value: _value,
            result: `${ball}B ${strike}S`
          }
        ]);
      }
    }
  };

  const _onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h2>야구게임</h2>
      <form onSubmit={_onSubmit}>
        <input
          type="text"
          maxLength={4}
          value={_value}
          onChange={_onChange}
          ref={_input}
        ></input>
        <button type="submit">확인</button>
      </form>
      <div>남은 기회: {count}</div>
      <ul>
        {tries.map((v, i) => {
          return <Try key={i} tryInfo={v} />;
        })}
      </ul>
    </>
  );
};

export default BaseBall;
