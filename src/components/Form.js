import React from "react";
import styles from "./Form.module.css";
function Form({ inputText, setInputText, todos, setTodos }) {
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: todos.length + 1 },
      ]);
    }
    setInputText("");
  };

  return (
    <form action="" className={styles.form}>
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Enter a new task"
        onChange={inputHandler}
        value={inputText}
      />
      <button onClick={submitHandler} type="submit">
        <i className="far fa-plus-square"></i>
      </button>
    </form>
  );
}

export default Form;
