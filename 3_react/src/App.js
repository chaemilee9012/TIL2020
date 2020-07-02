import React, { useRef, useState } from 'react';
import UserList from './2_velopert/UserList';
import CreateUser from './2_velopert/CreateUser';
// import Hello from './2_velopert/Hello';
// import Wrapper from './2_velopert/Wrapper';
// import Counter from './2_velopert/Counter';
// import InputSample from './2_velopert/InputSample';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'aaa',
      email: 'aaa.com',
      active: true,
    },
    {
      id: 2,
      username: 'bbb',
      email: 'bbb.com',
      active: false,
    },
    {
      id: 3,
      username: 'ccc',
      email: 'ccc.com',
      active: false,
    }
  ]);

  const nextId = useRef(4);
  // nextId 값 바뀔 때마다 컴포넌트 리렌더링 할 필요없으므로 useRef로 관리
  /* useRef() hook
    1. 리액트에서 특정 DOM 접근할 때
    2. 컴포넌트 리렌더링한 후에도 변수 값 그대로 기억하고 싶을 때
    * ref 값 바뀌어도 컴포넌트 리렌더링 X *
  */

  const onCreate = () => {
    const _user = {
      id: nextId.current,
      username,
      email
    };

    setUsers([...users, _user]);

    setInputs({
      username: '',
      email: '',
    });

    nextId.current += 1;
  }

  const onRemove = id => {
    setUsers(users.filter(_user => _user.id !== id));
  };

  const onToggle = id  => {
    setUsers(users.map(
      users => users.id === id
      ? {...users, active: !users.active}
      : users
    ));
  }

  return (
    // <Wrapper>
    //   {/* <Hello name="react" color="red" isSpecial={true} /> */}
    //   <Hello name="react" color="red" isSpecial />
    //   {/* props 불리언 값일때 값 설정 안 하면 기본값 = true */}
    //   <Hello color="orange" />
    // </Wrapper>
    // <Counter />
    // <InputSample />
    <>
      <CreateUser
        _username={username}
        _email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </>
  );
}

export default App;