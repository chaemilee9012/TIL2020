import React, { useState } from 'react';

function Todo({ list }) {
  return (
    <tr>
      <td>{list.value}</td>
      <td><input type="button" value="complete"/></td>
    </tr>
  );
}

function EnterTodo ({ tdList }){
  return (
    <>
      <h1>Todo List</h1>
      <table>
        <tbody>
          {tdList.map((value, idx) => (
              <Todo list={value} key={idx}/>
          ))}
          {/* <Todo list={todoList[0]}/>
          <Todo list={todoList[1]}/>
          <Todo list={todoList[2]}/> */}
        </tbody>
      </table>
    </>
  );
}

export default EnterTodo;