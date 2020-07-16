// import React, { useState, useEffect } from 'react';
// import React, { useReducer } from 'react';
import React from 'react';
import useInputs from './useInputs'

// function reducer(state, action) {
//   return {
//     ...state,
//     [action.name]: action.value
//   };
// }

const Info = () => {
  // const [name, setName] = useState('');
  // const [nickname, setNickname] = useState('');
  const [state, dispatch] = useInputs({
    name: '',
    naickname: ''
  });

  const { name, nickname } = state;

  // useEffect(() => { // nickname 값 변할 때마다 실행
  //   // console.log('렌더링이 완료되었습니다.');
  //   // console.log({
  //   //   name, nickname
  //   // });
  //   return () => { // 업데이트되기 직전 실행
  //     console.log('clean up');
  //     console.log(name);
  //   };
  // },);

  // const onChangeName = e => {
  //   setName(e.target.value);
  // };

  const onChange = e => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input
          name="name"
          value={name}
          // onChange={onChangeName}
          onChange={onChange}
        />
        <input
          name="nickname"
          value={nickname}
          // onChange={onChangeNickname}
          onChange={onChange}
        />
      </div>
      <div>
        <div><b>이름:</b> {name}</div>
        <div><b>닉네임:</b> {nickname}</div>
      </div>
    </div>
  );
};

export default Info;