export type Todo = { id: number; content: string };
export type TodoList = Todo[];
export type TodoState = {
  todoList: TodoList;
};
export type TodoActions = {
  addTodo: (content: string) => void;
  deleteTodo: (id: number) => void;
};

export type TodoStore = TodoState & { actions: TodoActions };
