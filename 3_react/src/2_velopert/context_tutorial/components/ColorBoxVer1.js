import React from 'react';
import { ColorConsumer } from '../contexts/color';
// import ColorContext from '../contexts/color';

const ColorBox = () => {
  return (
    <ColorConsumer>
      {/* <ColorContext.Consumer> */}
        {({ state }) => (
          <>
            <div
              style={{
                background: state.color,
                height: '64px',
                width: '64px',
              }}
            />
            <div
              style={{
                background: state.subcolor,
                height: '32px',
                width: '32px',
              }}
            />
          </>
        )}
      {/* </ColorContext.Consumer> */}
    </ColorConsumer>
  );
};

export default ColorBox;