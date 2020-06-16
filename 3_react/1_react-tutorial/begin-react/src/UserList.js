import React, { useContext } from 'react';
import { UserDispatch } from './App';

const User = React.memo(function User({ user }) {
  const { username, email, id, active } = user;
  const dispatch = useContext(UserDispatch);
  // useEffect(() => {
  //   console.log('컴포넌트가 나타남');
  //   return () => {
  //     console.log('컴포넌트 사라짐');
  //   }
  // }, []);

  // useEffect(() => {
  //   console.log('user 값 설정');
  //   console.log(user);
  //   return () => {
  //     console.log('user 값 바뀌기 전');
  //     console.log(user);
  //   }
  // }, [user]);
  
  return (
    <div>
      <b style={{
          color: active ? 'green' : 'black',
          cursor: 'pointer'
        }}
        onClick={() => dispatch({
          type: 'TOGGLE_USER',
          id
        })}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button onClick={() => dispatch({
        type: 'REMOVE_USER',
        id
      })}>삭제</button>
    </div>
  );
});

function UserList({ users }) {
  return (
      <div>
        {
          users.map(
            user => (
              <User
                user={user}
                key={user.id}
                // onRemove={onRemove}
                // onToggle={onToggle}
              />
            )
          )
        }
      </div>
  )
}

export default React.memo(
  UserList, (prveProps, nextProps) => nextProps.users === prveProps.users
);