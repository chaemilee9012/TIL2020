// import React, { Component } from 'react';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
// import SassComponent from './2_velopert/styling_react/SassComponent';
// import CSSModule from './2_velopert/styling_react/CSSModule';
// import StyledComponent from './2_velopert/styling_react/StyledComponents';
// import StylingWithSc from './2_velopert/styling_react/StylingWithSc';
import Button from './2_velopert/styling_react/components/Button';
import Dialog from './2_velopert/styling_react/components/Dialog';

const AppBlock = styled.div`
  border: 1px solid #333;
  margin: 0 auto;
  margin-top: 4rem;
  padding: 1rem;
  width: 512px;
`;

const ButtonGroup = styled.div`
  & + & { /* ButtonGroup 컴포넌트 두 개 같이 있을 때 */
    margin-top: 1rem;
  }
`;

const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595',
};

function App() {
  return (
    <ThemeProvider theme={{
      palette
    }}>
      <AppBlock>
        <ButtonGroup>
          <Button size="large">BUTTON</Button>
          <Button color="gray">BUTTON</Button>
          <Button color="pink" size="small">BUTTON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" outline>BUTTON</Button>
          <Button color="gray" outline>BUTTON</Button>
          <Button color="pink" size="small" outline>BUTTON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button fullWidth>BUTTON</Button>
          <Button color="gray" outline fullWidth>BUTTON</Button>
          <Button color="pink" fullWidth>BUTTON</Button>
        </ButtonGroup>
        <Dialog></Dialog>
      </AppBlock>
    </ThemeProvider>
  );
}
// class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <SassComponent /> */}
//         {/* <CSSModule /> */}
//         {/* <StyledComponent /> */}
//         {/* <StylingWithSc /> */}
//       </div>
//     );
//   }
// }

export default App;