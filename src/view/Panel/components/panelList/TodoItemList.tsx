import TodoItem from "./TodoItem";
import { PanelTypeEnum } from "@/view/Panel/types/enums";
import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import { removeTodo, revocation, toggleTodo } from "@/store/todo";
import type { TodoData } from "@/store/todo/types";
import { selectRenderList } from "@/store/todo/reselect";

const TodoItemList = () => {
  const renderList = useAppSelector(selectRenderList);

  const currentPanelType = useAppSelector((state) => state.todoStore.currentPanelType);

  const dispatch = useAppDispatch();

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleRevocation = (id: number) => {
    dispatch(revocation(id));
  };

  return renderList.map((item) => (
    <TodoItem
      key={item.id}
      todoData={item}
      currentPanelType={currentPanelType}
      onRemove={handleRemoveTodo}
      onRevocation={handleRevocation}
      onToggle={handleToggleTodo}
    />
  ));
};

export default TodoItemList;
