import React from "react";
import styles from "./Todo.module.css";
function Todo({ todo, todos, setTodos }) {
  const trashHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (todo.id === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className={styles.todoContainer}>
      <li
        className={`${styles.list} ${
          todo.completed === true ? styles.completed : ""
        }`}
      >
        {todo.text}
      </li>
      <div className={styles.done} onClick={completeHandler}>
        <i className="fas fa-check-square"></i>
      </div>
      <div className={styles.trash} onClick={trashHandler}>
        <i className="fas fa-trash"></i>
      </div>
    </div>
  );
}

export default Todo;
