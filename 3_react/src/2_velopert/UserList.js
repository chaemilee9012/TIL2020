import React, { useEffect } from 'react';
const User = React.memo(function User({_user, onRemove, onToggle}) {
  const {username, email, id, active} = _user;
  // useEffect(() => {
  //   console.log('화면에 나타남'); // mount 될 때 실행
  //   // props → state로 바꾸기
  //   // 외부 API 요청
  //   // 외부 라이브러리
  //   // setInterval, setTimeout
  //   // → ui가 나타난 이후 실행됨. DOM 접근 가능

  //   return () => {
  //     console.log('사라짐'); // unmount 될 때 실행
  //     // clearInterval, clearTimeout
  //     // 라이브러리 인스턴스 제거 
  //   };
  // }, []);
  
  useEffect(() => {
    console.log('user 값 설정됨');
    console.log(_user);

    return () => {
      console.log('값 바뀌기 전');
      console.log(_user);
    }
  }, [_user]);
  // _user 값 바뀔 때마다 실행
  // props로 받아온 값이나 useState로 관리하는 값 참조할 경우
  // 꼭 deps로 관리해야 함
  
  return(
    <div>
      <b
        style={{
          color: active ? 'green' : 'black',
          cursor: 'pointer',
        }}
        onClick={() => onToggle(id)}
      >{username}</b> <span>({email})</span>
      <button
        onClick={() => onRemove(id)}
      >삭제</button>
    </div>
  );
});

function UserList({users, onRemove, onToggle}) {
  return (
    <div>
      {/* <User _user={users[0]} />
      <User _user={users[1]} />
      <User _user={users[2]} /> */}
      {
        users.map(
          user => (
            <User
              _user={user}
              key={user.id}
              onRemove={onRemove}
              onToggle={onToggle}
            />)
        )
      }
    </div>
  );
}

export default React.memo(UserList);