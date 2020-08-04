import React, { useContext } from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  
  return (
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
  );
};

export default ColorBox;