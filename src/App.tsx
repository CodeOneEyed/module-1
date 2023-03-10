import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import AddForm from "./components/AddForm/AddForm";
import { Box } from "@mui/material";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <Box width={500}>
        <Header />
        <AddForm />
        <TodoList />
      </Box>
    </div>
  );
}

export default App;
