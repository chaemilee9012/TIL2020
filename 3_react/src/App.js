import React from 'react';
import Hello from './2_velopert/Hello';
import Wrapper from './2_velopert/Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" />
      <Hello color="orange" />
    </Wrapper>
  );
}

export default App;