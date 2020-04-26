import React, { useState } from 'react';

function FontSize() {
  const num = useState(12);
  
  const style = {
    fontSize: 12 + 'px'
  };

  const small = () => {
  };

  const large = () => {
    
  };

  return (
    <>
      <button onClick={small}>A</button>
      <button onClick={large}>a</button>
      <textarea cols="50" rows="4" style={style}>abcd</textarea>
    </>
  );
}

export default FontSize