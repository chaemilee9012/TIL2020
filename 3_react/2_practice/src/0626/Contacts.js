import React from "react";
import PrintLi from './PrintLi';

function Contacts({state, onClick}) {
  return (
    <div>
      <h2>Contacts</h2>
      <form action="/">
        <input type="search" placeholder="search"></input>
        <ul>
          {state.map((v, i) => {
            return <PrintLi key={i} stateValue={v} onClick={onClick}/>;
          })}

        </ul>
      </form>
    </div>
  );
}

export default Contacts;