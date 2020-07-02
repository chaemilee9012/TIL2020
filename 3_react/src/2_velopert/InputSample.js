import React, { useState, useRef } from 'react';

function InputSample() {
  // const [text, setText] = useState('');
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const nameInput = useRef();
  const { name, nickname } = inputs; // 비구조화 할당

  const _onChange = (e) => {
    // setText(e.target.value);
    const { name, value } = e.target; // 값 추출
    setInputs({
      ...inputs,
      [name]: value,
      // [name]: e.target name이 name or nickname인지에 따라 같은 키값 찾아서 업데이트
    });
  };

  const onReset = () => {
    // setText('');
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  }

  return (
    <div>
      {/* <input 
        onChange={_onChange}
        value={text}
        // 초기화 버튼 눌렀을 때 빈 값 들어가게 하려면 value 값 지정해놔야 함
      /> */}
      <input
        placeholder="이름"
        name="name"
        onChange={_onChange}
        value={name} // 사전에 비구조할당 해놨으므로 간단하게 사용
        ref={nameInput}
      />
      <input
        placeholder="닉네임"
        name="nickname"
        onChange={_onChange}
        value={nickname}
      />
      <button
        onClick={onReset}
      >초기화</button>
      <div>
        <b>값: </b>
        {/* {text} */}
        {name}({nickname})
      </div>
    </div>
  );
}

export default InputSample;