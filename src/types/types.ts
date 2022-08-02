export enum Themes {
  LIGHT = 'light',
  DARK = 'dark',
}

type Todo = {
  id: string;
  task: string;
  isCompleted: boolean;
};

export type TodoState = {
  todos: Array<Todo>;
};
