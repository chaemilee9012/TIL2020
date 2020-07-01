import React from 'react';

function PrintLi({stateValue, onClick}) {
  return(
    <li
      onClick={() => {
        onClick(stateValue.id);
        console.log(stateValue.id);

      }}
    >{stateValue.name}</li>
  )
}

export default PrintLi;