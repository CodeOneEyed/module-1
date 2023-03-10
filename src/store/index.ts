import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./TodoSLice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
