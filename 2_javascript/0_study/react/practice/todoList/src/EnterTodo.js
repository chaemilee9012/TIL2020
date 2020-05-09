import React, { useState } from 'react';

function Todo({ list }) {
  return (
    <tr>
      <td>{list.value}</td>
      <input type="button" value="complete"/>
    </tr>
  );
}

function EnterTodo ({ tdList }){
  return (
    <>
      <input type="text" placeholder="enter new todo" />
      <input type="button" value="enter" />
      <h1>Todo List</h1>
      <table>
        <tbody>
          {tdList.map( value => (
              <Todo list={value} key={tdList.idx}/>
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