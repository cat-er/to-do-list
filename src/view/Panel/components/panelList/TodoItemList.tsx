import TodoItem from "./TodoItem";
import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import { removeTodo, revocation, toggleTodo } from "@/store/todo";
import { selectRenderList } from "@/store/todo/reselect";
import { Empty } from "antd";

const TodoItemList = () => {
  const renderList = useAppSelector(selectRenderList);

  const currentPanelType = useAppSelector((state) => state.todoStore.currentPanelType);

  const dispatch = useAppDispatch();

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  const handleRevocation = (id: number) => {
    dispatch(revocation(id));
  };

  return renderList.length ? (
    <div className="todo-item-list">
      {renderList.map((item) => (
        <TodoItem
          key={item.id}
          todoData={item}
          currentPanelType={currentPanelType}
          onRemove={handleRemoveTodo}
          onRevocation={handleRevocation}
          onToggle={handleToggleTodo}
        />
      ))}
    </div>
  ) : (
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
  );
};

export default TodoItemList;
