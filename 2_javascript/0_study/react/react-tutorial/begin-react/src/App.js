import React, { useRef } from 'react';
import UserList from './UserList';


function App() {
  const users = [
    {
      id: 1,
      username: 'aaa',
      email: 'aaa@aaa.com'
    },
    {
      id: 2,
      username: 'bbb',
      email: 'bbb@aaa.com'
    },
    {
      id: 3,
      username: 'ccc',
      email: 'ccc@aaa.com'
    },
  ];

  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current);
    nextId.current += 1;
  }

  return (
    <UserList users={users} />
  );
}

export default App;