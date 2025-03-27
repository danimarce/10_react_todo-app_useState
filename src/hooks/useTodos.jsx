import { useState } from "react";

export const useTodos = () => {
  const TODOS_INITIAL_STATE = [];

  const [todos, setTodos] = useState(TODOS_INITIAL_STATE);

  const handleCreateTask = (newTodo) => {
    setTodos((currentTodos) => {
      return [...currentTodos, newTodo];
    });
  };

  return {
    todos,
    handleCreateTask,
  };
};
