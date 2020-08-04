import React, { Component } from 'react';
import ColorContext from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends Component {
  static contextType = ColorContext;
  handleEstColor = color => {
    this.context.actions.setColor(color);
  };
  render() {
    return (
      <div>
        <h2>색상 선택</h2>
        <div style={{ display: 'flex' }}>
          {colors.map(color => (
            <div
              key={color}
              style={{
                background: color,
                cursor: 'pointer',
                height: '24px',
                width: '24px',
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default SelectColors;