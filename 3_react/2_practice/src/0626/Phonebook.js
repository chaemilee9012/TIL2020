import React, { useState, useRef } from "react";
import Contacts from "./Contacts";
import DetailInfo from "./DetailInfo";
import NewContact from "./NewContact";

function Phonebook() {
  const [selectedId, setSelectedId] = useState('0');
  const nextId = useRef(2);
  const [list, setList] = useState([
    {
      id: 0,
      name: "aaa",
      phone: "1111",
    },
    {
      id: 1,
      name: "bbb",
      phone: "2222",
    },
    {
      id: 2,
      name: "ccc",
      phone: "33333",
    },
  ]);

  const addContact = (nameValue, phoneValue) => {
    console.log("add");
    nextId.current += 1;

    setList([
      ...list,
      {
        id: nextId.current,
        name: nameValue,
        phone: phoneValue,
      },
    ]);
  };

  const [_value, setValue] = useState({
    id: '',
    name: 'name',
    phone: '010-1234-5678',
  });

  const clickLi = (id) => {
    console.log('click li');
    setSelectedId(id);
    console.log(id);
    
    setValue({
      ..._value,
      id: id,
      name: list[id].name,
      phone: list[id].phone,
    })
  }

  const deleteLi = (e) => {
    e.preventDefault();
    console.log('delete');
    setList(
      list.filter(contact => contact.id !== selectedId)
    );
    
  }

  return (
    <div>
      <Contacts state={list} onClick={clickLi}/>
      <DetailInfo selected={_value} onClick={deleteLi}/>
      <NewContact state={_value} onChange={addContact} />
    </div>
  );
}

export default Phonebook;