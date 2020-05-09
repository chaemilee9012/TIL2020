import React, {useState} from 'react';

function FontSize() {
  const [number, setNumber] = useState(12);
  
  const increase = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    setNumber(number - 1);
  };

  const style = {
    fontSize: number, 
    height: 100,
    width: 200
  };

  return (
    <>
      <button onClick={increase}>A</button>
      <button onClick={decrease}>a</button>
      <textarea cols="50" rows="4" style={style}>abcd</textarea>
    </>
  );
}

export default FontSize