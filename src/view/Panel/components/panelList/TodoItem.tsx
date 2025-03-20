import { Checkbox, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import type { TodoData } from "@/store/todo/types";

interface Props {
  todoData: TodoData;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todoData, onRemove, onToggle }) => {
  const { id, text, isDone } = todoData;

  return (
    <div className="todo-item full">
      <div className="todo-item-left">
        <Checkbox checked={isDone} onChange={() => onToggle(id)} />

        <div className="todo-item-content">{text}</div>
      </div>

      <Button type="text" danger icon={<DeleteOutlined />} onClick={() => onRemove(id)}></Button>
    </div>
  );
};

export default TodoItem;
