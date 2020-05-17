// import React, {useState} from 'react';
import React, { useReducer } from 'react';

function reducer(state, action) {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

function Counter() {
  // const [number, setNumber] = useState(0);
  const [number, dispatch] = useReducer(reducer, 0);
  
//   const plus = () => {
//     setNumber(number + 1);
//   }
  const plus = () => {
    // setNumber(prevNumber => prevNumber + 1);
    dispatch({
      type: 'INCREMENT'
    })
  };

  const minus = () => {
    // setNumber(number - 1);
    dispatch({
      type: 'DECREMENT'
    })
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button>
    </div>
  )
}

export default Counter;