export type Todo = string;
export type TodoList = Todo[];
export type TodoState = {
  todo: Todo;
  todoList: TodoList;
};
export type TodoActions = {
  addTodo: (content: string) => void;
  deleteTodo: (idx: number) => void;
};

export type TodoStore = TodoState & { actions: TodoActions };
