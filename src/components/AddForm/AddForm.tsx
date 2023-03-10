import { Add as Addicon } from "@mui/icons-material";
import { Button, Paper, TextField } from "@mui/material";

import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { addNewTodo, fetchTodos } from "../../store/TodoSLice";
// import { addNewTodo } from "../../store/TodoSLice";

const AddForm = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addNewTodo(inputValue));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <Paper
      elevation={3}
      sx={{
        marginBottom: 5,
        width: "100%",
        padding: "25px 30px",
        borderRadius: 2,
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        gap: 2,
      }}
    >
      <TextField
        value={inputValue}
        name="title"
        fullWidth
        onChange={handleChange}
        id="outlined-basic"
        label="task title"
        variant="outlined"
      />

      <Button startIcon={<Addicon />} variant="outlined" onClick={handleClick}>
        Add
      </Button>
    </Paper>
  );
};

export default AddForm;
