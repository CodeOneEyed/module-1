import { Button, Paper, Box } from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { deleteTodo, toggleStatus } from "../../store/TodoSLice";
import "./TodoItem.css";

interface TodoItemProps {
  title: string;
  id: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = (todo) => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((store) => store.todos.list);
  console.log(todos);

  const deleteFunc = () => {
    dispatch(deleteTodo(todo.id));
  };

  const toggleCompleteFunc = () => {
    dispatch(toggleStatus(todo.id));
    console.log(todos);
  };
  return (
    <Paper
      className={!todo.completed ? "completed" : "  "}
      elevation={3}
      sx={{
        width: "100%",
        padding: "25px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        gap: 2,
      }}
    >
      {todo.title}
      <Box display="flex" alignContent={"center"} sx={{ gap: 2 }}>
        <Button
          variant="outlined"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          delete
        </Button>
        <Button
          variant="outlined"
          onClick={() => dispatch(toggleStatus(todo.id))}
        >
          complete
        </Button>
      </Box>
    </Paper>
  );
};

export default TodoItem;
