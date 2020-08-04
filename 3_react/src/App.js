import React from 'react';
import ColorBox from './2_velopert/context_tutorial/components/ColorBox';
import { ColorProvider } from './2_velopert/context_tutorial/contexts/color';
import SelectColors from './2_velopert/context_tutorial/components/SelectColors';
// import ColorContext from './2_velopert/context_tutorial/contexts/color';

const App = () => {
  return (
    <ColorProvider>
      {/* <ColorContext.Provider value={{ clolor: '#f00'}}> */}
        <div>
          <SelectColors />
          <ColorBox />
        </div>
      {/* </ColorContext.Provider> */}
    </ColorProvider>
  );
};

export default App;