import React from 'react';

function Hello() {
  const name = "react";
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '2rem'
  }
  return <div style={style}>{name}?</div>;
}

export default Hello;