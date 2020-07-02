import React from 'react';
function User({_user, onRemove, onToggle}) {
  const {username, email, id, active} = _user;
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
}

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

export default UserList;