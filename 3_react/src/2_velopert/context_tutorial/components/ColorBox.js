import React from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {value => (
        <div
          style={{
            background: value.color,
            height: '64px',
            width: '64px',
          }}
        />
      )}
    </ColorContext.Consumer>
  );
};

export default ColorBox;