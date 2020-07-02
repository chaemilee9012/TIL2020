import React from 'react';

function CreateUser({_username, _email, onChange, onCreate}) {
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={_username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={_email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default CreateUser;