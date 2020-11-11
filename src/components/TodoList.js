import React from "react";
import styles from "./TodoList.module.css";
import Todo from "./Todo";
function TodoList({ todos, setTodos }) {
  const todosList = todos.map((todo) => (
    <Todo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
  ));
  return <ul className={styles.todoContainer}>{todosList}</ul>;
}
export default TodoList;
