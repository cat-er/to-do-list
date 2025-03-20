export interface TodoData {
  id: number;
  text: string;
  isDone: boolean;
}

export interface TodoStoreState {
  todoData: TodoData[];
}
