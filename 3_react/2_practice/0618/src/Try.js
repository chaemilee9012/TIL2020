import React from 'react';

function Try({tryInfo}) {
  console.log('try');
  return (
    <li>
      <div>{tryInfo.value}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
}

// export default Try;
export default React.memo(Try);