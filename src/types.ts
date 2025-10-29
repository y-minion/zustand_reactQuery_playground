export type Todo = { id: string; content: string };
export type TodoList = Todo[];
export type TodoState = {
  todoList: TodoList;
};
export type TodoActions = {
  addTodo: (content: string) => void;
  deleteTodo: (id: string) => void;
};

export type TodoStore = TodoState & { actions: TodoActions };
