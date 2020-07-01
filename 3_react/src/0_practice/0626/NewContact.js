import React from "react";

function NewContact({state, onChange}) {
  return (
    <div>
      <h2>New Contact</h2>
      <form
        action="/"
        onSubmit={ e => {
            e.preventDefault();
            onChange(e.target.inputName.value, e.target.inputPhone.value);
          }
        }>
        <input
          type="text"
          placeholder={state.name}
          name="inputName"
        ></input>
        <input
          type="tel"
          placeholder={state.phone}
          // pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
          name="inputPhone"
        ></input>
        <input
          type="submit"
        ></input>
      </form>
    </div>
  );
}

export default NewContact;