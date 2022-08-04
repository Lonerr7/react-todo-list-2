export enum Themes {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum Filters {
  ALL = 'all',
  COMPLETED = 'completed',
  UNCOMPLETED = 'uncompleted',
}

type Todo = {
  id: string;
  task: string;
  isCompleted: boolean;
};

export type TodoState = {
  todos: Array<Todo>;
};
