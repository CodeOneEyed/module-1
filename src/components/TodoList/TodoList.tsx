import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchTodos } from "../../store/TodoSLice";
import { Todo } from "../../Types/Types";
import TodoItem from "../TodoItem/TodoItem";

const TodoList: React.FC = () => {
  const todos = useAppSelector((store) => store.todos.list);
  const dispatch = useAppDispatch();

  return (
    <Box>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </Box>
  );
};

export default TodoList;
