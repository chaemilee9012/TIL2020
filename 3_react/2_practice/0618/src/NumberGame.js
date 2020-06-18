import React, { useState, useRef } from 'react';

function NumberGame() {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('정답을 입력해주세요.');
  const _input = useRef(null);

  const onClick = e => {
    e.preventDefault();
    _input.current.focus();

    if(first * second === parseInt(value)) {
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setResult('딩동댕');
    } else {
      setResult('땡');
    }
    setValue('');
  }

  const onChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <>
      <span>{first} * {second} ?</span>
      <p>
        <input type="number" value={value} onChange={onChange} ref={_input}></input>
        <button onClick={onClick}>결과확인</button>
      </p>
      <p>{result}</p>
    </>
  );
}

export default NumberGame;