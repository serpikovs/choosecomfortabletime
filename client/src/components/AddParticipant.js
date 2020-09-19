import React from "react"
import { Context } from "../Context"

export default function (props) {
  const { addParticipant } = React.useContext(Context)

  const [name, setName] = React.useState('')

  const inputOnChangeHandler = (e) => {
    setName(e.target.value)
    if (e.key==='Enter') {
      addButtonHandler()
    }
  }

  const inputOnKeyPressHandler = (e) => {
    if (e.key==='Enter') addButtonHandler() 
  }

 

  const addButtonHandler = () => {
    addParticipant({key: uuidv4(), name:name})
    setName('')
  }

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Имя"
        aria-label="Recipient's username"
        value={name}
        onChange={inputOnChangeHandler}
        onKeyPress={inputOnKeyPressHandler}
      />
      <button
        className="btn btn-primary m-3"
        type="button"
        onClick={addButtonHandler}
      >
        Добавить
      </button>
    </div>
  )
}
