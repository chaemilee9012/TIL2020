import { useReducer, useCallback } from 'react';

function reducer(state, action) {
  const { name, value } = action;
  console.log(action);
  // console.log(Object.keys(state));

  // console.log(action);
  switch (action.type) {
    // change
    case 'CHANGE_INPUT':
      return {
        ...state,
        [name]: value,
      };

    // input
    case 'RESET_INPUT':
      
      return {
        ...state,
        username: 'aaa',
        email: '',
      };
    default:
      return state;
  }
}

function useInputs(initialForm) {
  // form 초기값
  // const [form, setForm] = useState(initialForm);
  const [state, dispatch] = useReducer(reducer, initialForm);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value,
    });
    // setForm((form) => ({ ...form, [name]: value }));
  }, []);
  // const reset = useCallback(() => setForm(initialForm), [initialForm]);
  const reset = useCallback(() => {
    dispatch({
      type: 'RESET_INPUT',
    });
  }, []);

  return [state, onChange, reset];
}

export default useInputs;
