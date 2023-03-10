import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type TodosState = {
  list: Todo[];
  loading: boolean;
  error: string | null;
  oneTodo: any;
  modal: boolean;
};

export const fetchTodos = createAsyncThunk<Todo[]>(
  "fetchTodos",
  async function () {
    const res = await fetch("http://localhost:8000/todos");
    const data = await res.json();
    return data;
  }
);

export const addNewTodo = createAsyncThunk<Todo, string>(
  "todos/addNewTodo",
  async function (text: string) {
    const todo = {
      title: text,
      completed: false,
    };
    const res = await fetch("http://localhost:8000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    return (await res.json()) as Todo;
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async function (id: string) {
    const res = await fetch(`http://localhost:8000/todos${id}`, {
      method: "DELETE",
    });
    return id;
  }
);

export const toggleStatus = createAsyncThunk<
  Todo,
  string,
  { rejectValue: string; state: { todos: TodosState } }
>("todos/toggleStatus", async function (id, { rejectWithValue, getState }) {
  const todo = getState().todos.list.find((todo) => todo.id === id);

  if (todo) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: !todo.completed,
        }),
      }
    );

    if (!response.ok) {
      return rejectWithValue("Can't toggle status. Server error.");
    }

    return (await response.json()) as Todo;
  }

  return rejectWithValue("No such todo in the list!");
});

const initialState: TodosState = {
  list: [],
  loading: false,
  error: null,
  oneTodo: {},
  modal: false,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(addNewTodo.fulfilled, (state, action) => {
      state.list.push(action.payload);
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    });
    builder.addCase(toggleStatus.fulfilled, (state, action) => {
      const toggledTodo = state.list.find(
        (todo) => todo.id === action.payload.id
      );
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    });
  },
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
