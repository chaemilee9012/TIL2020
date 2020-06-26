import React from "react";

function DetailInfo({selected, onClick}) {
  console.log('detail info');
  return (
    <div>
      <h2>Detail Information</h2>
      <p>이름: {selected.name}</p>
      <p>연락처: {selected.phone}</p>
      <button type="submit">Edit</button>
      <button
        type="submit"
        onClick={onClick}
      >Delete</button>
    </div>
  );
}

export default DetailInfo;