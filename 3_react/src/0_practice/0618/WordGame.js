import React, { useState, useRef } from 'react';

function WordGame() {
  const [start, setStart] = useState('장유수');
  const [_value, setValue] = useState('');
  const [result, setResult] = useState('끝말잇기 시작');
  const [list, setList] = useState([]);
  const _input = useRef(null);

  const _onChange = (e) => {
    setValue(e.target.value);
  }

  const _onClick = () => {
    if(start.charAt(start.length - 1, 1) === _value.slice(0, 1)) {
      setStart(_input.current.value);
      setResult('딩동댕');
      setList([...list, _value]);
    } else {
      setResult('땡');
      setList([]);
    }
  }

  return (
    <>
      <span>{start}</span>
      <p>
        <input type="text" value={_value} onChange={_onChange} ref={_input}></input>
        <button type="button" onClick={_onClick}>입력</button>
      </p>
      <p>{result}</p>
      <p>{list}</p>
    </>
  );
}

export default WordGame;