import TodoItem from "./TodoItem";

import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import { removeTodo, toggleTodo } from "@/store/todo";

const TodoItemList = () => {
  const todoData = useAppSelector((state) => state.todoStore.todoData);
  const dispatch = useAppDispatch();

  const removeTodoHandle = (id: number) => {
    dispatch(removeTodo(id));
  };

  const toggleTodoHandle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  return todoData.map((item) => (
    <TodoItem
      key={item.id}
      todoData={item}
      onRemove={removeTodoHandle}
      onToggle={toggleTodoHandle}
    />
  ));
};

export default TodoItemList;
