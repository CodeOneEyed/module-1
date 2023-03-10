export type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  key: number;
};

export type TodosState = {
  todoList: Todo[];
  loading: boolean;
  error: string | null;
};
